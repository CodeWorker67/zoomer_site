import { Helmet } from 'react-helmet-async';
import HeroSection from '@components/sections/HeroSection';
import FeaturesSection from '@components/sections/FeaturesSection';
import PlansPreviewSection from '@components/sections/PlansPreviewSection';
import TrustSection from '@components/sections/TrustSection';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>ZoomerVPN — Быстрый и безопасный VPN</title>
        <meta name="description" content="ZoomerVPN — быстрый и безопасный VPN на базе VLESS Reality. До 10 Гбит/с, серверы в 4 странах. Попробуй 5 дней бесплатно!" />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <PlansPreviewSection />
    </>
  );
}
