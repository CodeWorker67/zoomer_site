import { Navigate, useLocation } from 'react-router-dom';
import SeoArticleLayout from '@components/seo/SeoArticleLayout';
import { getSeoPageByPath } from '@content/seoPages';

export default function SeoArticlePage() {
  const { pathname } = useLocation();
  const page = getSeoPageByPath(pathname);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return <SeoArticleLayout key={page.path} page={page} />;
}
