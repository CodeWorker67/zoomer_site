import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import useAuthStore from '@stores/authStore';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import Button from '@components/ui/Button';
import { ROUTES } from '@utils/constants';
import { SEO_PAGE_PATHS } from '@content/seoPages';
import { getSeoPageByPath, EXTRA_SEO_PATHS } from '@content/seoRegistry';
import SeoArticleLayout from '@components/seo/SeoArticleLayout';

import HomePage from '@pages/public/HomePage';

const PricingPage = lazy(() => import('@pages/public/PricingPage'));
const SetupPage = lazy(() => import('@pages/public/SetupPage'));
const SupportPage = lazy(() => import('@pages/public/SupportPage'));
const LoginPage = lazy(() => import('@pages/auth/LoginPage'));
const TelegramLoginCallbackPage = lazy(() => import('@pages/auth/TelegramLoginCallbackPage'));
const BotLoginPage = lazy(() => import('@pages/auth/BotLoginPage'));
const DashboardPage = lazy(() => import('@pages/dashboard/DashboardPage'));
const CheckoutPage = lazy(() => import('@pages/checkout/CheckoutPage'));
const SuccessPage = lazy(() => import('@pages/checkout/SuccessPage'));
const PrivacyPolicyPage = lazy(() => import('@pages/public/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@pages/public/TermsPage'));
const GiftPage = lazy(() => import('@pages/gift/GiftPage'));
const FaqPage = lazy(() => import('@pages/public/FaqPage'));
const AboutPage = lazy(() => import('@pages/public/AboutPage'));
const StatusPage = lazy(() => import('@pages/public/StatusPage'));
const ProtocolsPage = lazy(() => import('@pages/public/ProtocolsPage'));
const ContactsPage = lazy(() => import('@pages/public/ContactsPage'));
const GuidesHubPage = lazy(() => import('@pages/public/GuidesHubPage'));

const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center text-gray-500 text-sm">Загрузка…</div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;
  return children;
};

/** Прокрутка вверх при смене страницы; плавно — для перехода на главную по /#top */
function ScrollOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollTop = (behavior = 'auto') =>
      window.scrollTo({ top: 0, left: 0, behavior });

    if (pathname === ROUTES.HOME && hash === '#top') {
      scrollTop('smooth');
      const t = window.setTimeout(() => scrollTop('smooth'), 100);
      return () => window.clearTimeout(t);
    }

    if (hash) return;

    scrollTop();
    const t = window.setTimeout(scrollTop, 100);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
}

function AppShell() {
  const location = useLocation();
  const hideChrome = location.pathname === ROUTES.GIFT || location.pathname.startsWith('/gift');
  const seoPage = getSeoPageByPath(location.pathname);

  return (
    <div className="min-h-screen bg-zoomer-dark bg-grid">
      {!hideChrome && <Header />}
      <main className={hideChrome ? '' : 'pt-16'}>
        {seoPage ? (
          <SeoArticleLayout key={seoPage.path} page={seoPage} />
        ) : (
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path={ROUTES.GIFT} element={<GiftPage />} />
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.PRICING} element={<PricingPage />} />
              <Route path={ROUTES.SETUP} element={<SetupPage />} />
              <Route path={ROUTES.SUPPORT} element={<SupportPage />} />
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route
                path={ROUTES.LOGIN_TELEGRAM_CALLBACK}
                element={<TelegramLoginCallbackPage />}
              />
              <Route path={ROUTES.LOGIN_BOT} element={<BotLoginPage />} />
              <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
              <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
              <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
              <Route path={ROUTES.TERMS} element={<TermsPage />} />
              <Route path={ROUTES.FAQ} element={<FaqPage />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.STATUS} element={<StatusPage />} />
              <Route path={ROUTES.PROTOCOLS} element={<ProtocolsPage />} />
              <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
              <Route path={ROUTES.GUIDES} element={<GuidesHubPage />} />
              {[...SEO_PAGE_PATHS, ...EXTRA_SEO_PATHS].map((seoPath) => (
                <Route
                  key={`${seoPath}-slash`}
                  path={`${seoPath}/`}
                  element={<Navigate to={seoPath} replace />}
                />
              ))}
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        )}
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}

function App() {
  const { loadFromStorage } = useAuthStore();

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollOnRouteChange />
          <AppShell />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: { background: '#1A1A2E', color: '#fff', border: '1px solid #2A2A40' },
              success: { style: { background: '#065F46' } },
              error: { style: { background: '#7F1D1D' } },
            }}
          />
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-7xl font-bold text-gradient mb-4">404</div>
        <p className="text-gray-400 mb-8">Страница не найдена</p>
        <Link to="/">
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
