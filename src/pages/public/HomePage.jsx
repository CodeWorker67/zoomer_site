import { Helmet } from 'react-helmet-async';
import HeroSection from '@components/sections/HeroSection';
import FeaturesSection from '@components/sections/FeaturesSection';
import PlansPreviewSection from '@components/sections/PlansPreviewSection';
import TrustSection from '@components/sections/TrustSection';
import { canonicalFor } from '@utils/seo';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Зумерский VPN — защищённая передача данных | VLESS Reality</title>
        <meta name="description" content="Зумерский ВПН: защищённая передача данных, VLESS Reality, стабильное соединение. До 10 Гбит/с, 4 страны. 5 дней бесплатно." />
        <link rel="canonical" href={canonicalFor('/')} />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <PlansPreviewSection />
    </>
  );
}
