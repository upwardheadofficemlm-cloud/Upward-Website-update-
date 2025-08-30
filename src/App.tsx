import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CMSProvider } from './contexts/CMSContext';
import SEOHead from './components/SEOHead';
import AdminPanel from './components/cms/AdminPanel';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SettingsButton from './components/SettingsButton';
import MetaPixelTracker from './components/MetaPixel';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import BrandIdentityPage from './pages/services/BrandIdentityPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import ContentCreationPage from './pages/services/ContentCreationPage';
import SEOServicesPage from './pages/services/SEOServicesPage';
import TrainingCenterPage from './pages/TrainingCenterPage';
import BillboardsPage from './pages/ooh/BillboardsPage';
import BillboardDetailPage from './pages/ooh/BillboardDetailPage';
import AdNovaPage from './pages/ooh/AdNovaPage';
import PaymentsPage from './pages/PaymentsPage';
import AdminPage from './pages/AdminPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DigitalMarketingProposalPage from './pages/proposals/DigitalMarketingProposalPage';
import WebDevelopmentProposalPage from './pages/proposals/WebDevelopmentProposalPage';
import BrandIdentityProposalPage from './pages/proposals/BrandIdentityProposalPage';
import SocialMediaProposalPage from './pages/proposals/SocialMediaProposalPage';
import ContentCreationProposalPage from './pages/proposals/ContentCreationProposalPage';
import SEOServicesProposalPage from './pages/proposals/SEOServicesProposalPage';
import GenericProposalPage from './pages/proposals/GenericProposalPage';



// Layout component that wraps all pages
const Layout: React.FC<{ children: React.ReactNode; currentPage: string }> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead page={currentPage} />
      <Navigation currentPage={currentPage} />
      {/* Deployment Test Indicator - Removed since deployment is confirmed */}
      {children}
      <Footer />
      <AdminPanel />
      <SettingsButton />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Debug logging
  console.log('App component loaded');
  console.log('Current URL:', window.location.href);
  console.log('Current pathname:', window.location.pathname);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <CMSProvider>
        <MetaPixelTracker />
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <Layout currentPage="home">
                <HomePage />
              </Layout>
            } 
          />

          {/* Services Pages */}
          <Route 
            path="/services" 
            element={
              <Layout currentPage="services">
                <ServicesPage />
              </Layout>
            } 
          />
          <Route 
            path="/brand-identity" 
            element={
              <Layout currentPage="brand-identity">
                <BrandIdentityPage />
              </Layout>
            } 
          />
          <Route 
            path="/digital-marketing" 
            element={
              <Layout currentPage="digital-marketing">
                <DigitalMarketingPage />
              </Layout>
            } 
          />
          <Route 
            path="/social-media" 
            element={
              <Layout currentPage="social-media">
                <SocialMediaPage />
              </Layout>
            } 
          />
          <Route 
            path="/web-development" 
            element={
              <Layout currentPage="web-development">
                <WebDevelopmentPage />
              </Layout>
            } 
          />
          <Route 
            path="/content-creation" 
            element={
              <Layout currentPage="content-creation">
                <ContentCreationPage />
              </Layout>
            } 
          />
          <Route 
            path="/seo-services" 
            element={
              <Layout currentPage="seo-services">
                <SEOServicesPage />
              </Layout>
            } 
          />

          {/* OOH Advertising Pages */}
          <Route 
            path="/billboards" 
            element={
              <Layout currentPage="billboards">
                <BillboardsPage />
              </Layout>
            } 
          />
          <Route 
            path="/billboards/:id" 
            element={
              <Layout currentPage="billboards">
                <BillboardDetailPage />
              </Layout>
            } 
          />
          <Route 
            path="/adnova" 
            element={
              <Layout currentPage="adnova">
                <AdNovaPage />
              </Layout>
            } 
          />

          {/* Main Pages */}
          <Route 
            path="/about" 
            element={
              <Layout currentPage="about">
                <AboutPage />
              </Layout>
            } 
          />
          <Route 
            path="/training-center" 
            element={
              <Layout currentPage="training-center">
                <TrainingCenterPage />
              </Layout>
            } 
          />
          <Route 
            path="/portfolio" 
            element={
              <Layout currentPage="portfolio">
                <PortfolioPage />
              </Layout>
            } 
          />
          <Route 
            path="/team" 
            element={
              <Layout currentPage="team">
                <TeamPage />
              </Layout>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Layout currentPage="contact">
                <ContactPage />
              </Layout>
            } 
          />

          {/* Admin Pages */}
          <Route 
            path="/admin" 
            element={<AdminPage />}
          />
          <Route 
            path="/admin/dashboard" 
            element={<AdminDashboardPage />}
          />

          {/* Hidden Pages */}
          <Route 
            path="/payments" 
            element={
              <div style={{ 
                minHeight: '100vh', 
                backgroundColor: 'red', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                PAYMENTS PAGE TEST - ROUTING WORKS!
                <br />
                <button 
                  onClick={() => window.location.href = '/'}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    color: 'red',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Go Home
                </button>
              </div>
            } 
          />

          {/* Privacy Policy Page */}
          <Route 
            path="/privacy-policy" 
            element={
              <Layout currentPage="privacy-policy">
                <PrivacyPolicyPage />
              </Layout>
            } 
          />

          {/* Proposal Pages - Not indexed by search engines */}
          <Route 
            path="/proposals/digital-marketing/:proposalId" 
            element={
              <Layout currentPage="digital-marketing-proposal">
                <DigitalMarketingProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/web-development/:proposalId" 
            element={
              <Layout currentPage="web-development-proposal">
                <WebDevelopmentProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/brand-identity/:proposalId" 
            element={
              <Layout currentPage="brand-identity-proposal">
                <BrandIdentityProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/social-media/:proposalId" 
            element={
              <Layout currentPage="social-media-proposal">
                <SocialMediaProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/content-creation/:proposalId" 
            element={
              <Layout currentPage="content-creation-proposal">
                <ContentCreationProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/seo-services/:proposalId" 
            element={
              <Layout currentPage="seo-services-proposal">
                <SEOServicesProposalPage />
              </Layout>
            } 
          />
          <Route 
            path="/proposals/:proposalType/:proposalId" 
            element={
              <Layout currentPage="proposal">
                <GenericProposalPage />
              </Layout>
            } 
          />

          {/* 404 Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CMSProvider>
    </Router>
  );
}

export default App;