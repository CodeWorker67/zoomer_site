import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import { SITE_NAME, canonicalFor } from '@utils/seo';
import SeoCta from '@components/seo/SeoCta';

function renderBlock(block, index) {
  if (block.type === 'p') {
    return (
      <p key={index} className="text-gray-300 leading-relaxed">
        {block.text}
      </p>
    );
  }
  if (block.type === 'ul') {
    return (
      <ul key={index} className="list-disc pl-5 space-y-2 text-gray-300">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === 'ol') {
    return (
      <ol key={index} className="list-decimal pl-5 space-y-2 text-gray-300">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === 'table') {
    return (
      <div key={index} className="overflow-x-auto rounded-xl border border-zoomer-border">
        <table className="w-full text-sm text-left">
          <thead className="bg-white/5 text-gray-300">
            <tr>
              {block.headers.map((h, i) => (
                <th key={i} className="px-4 py-3 font-medium whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-400 divide-y divide-zoomer-border">
            {block.rows.map((row, ri) => (
              <tr key={ri} className="hover:bg-white/[0.02]">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 align-top ${ci === 0 ? 'text-gray-300 font-medium' : ''} ${ci === 2 ? 'text-zoomer-neon/90' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

export default function SeoArticleLayout({ page }) {
  const { path, title, description, h1, intro, sections = [], related = [] } = page;
  const canonical = canonicalFor(path);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <article className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10">
            <p className="text-sm text-gray-500 mb-3">
              <Link to={ROUTES.HOME} className="hover:text-zoomer-neon transition-colors">
                {SITE_NAME}
              </Link>
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{h1}</h1>
            {intro && <p className="text-lg text-gray-400 leading-relaxed">{intro}</p>}
          </header>

          <div className="space-y-10">
            {sections.map((section, si) => (
              <section key={si}>
                {section.heading && (
                  <h2 className="text-xl font-semibold text-white mb-4">{section.heading}</h2>
                )}
                <div className="space-y-4">{(section.blocks ?? []).map(renderBlock)}</div>
              </section>
            ))}
          </div>

          <SeoCta className="mt-12" />

          {related.length > 0 && (
            <nav className="mt-10 pt-8 border-t border-zoomer-border" aria-label="Похожие материалы">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Читайте также
              </h2>
              <ul className="flex flex-wrap gap-2">
                {related.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-zoomer-neon px-3 py-1.5 rounded-lg bg-white/5 border border-zoomer-border transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
