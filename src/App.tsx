import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CMSProvider } from './contexts/CMSContext';
import SEOHead from './components/SEOHead';
import AdminPanel from './components/cms/AdminPanel';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SettingsButton from './components/SettingsButton';
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
import AdNovaPage from './pages/ooh/AdNovaPage';
import PaymentsPage from './pages/PaymentsPage';
import AdminPage from './pages/AdminPage';



// Layout component that wraps all pages
const Layout: React.FC<{ children: React.ReactNode; currentPage: string }> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen">
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

          {/* Hidden Pages */}
          <Route 
            path="/payments" 
            element={
              <Layout currentPage="payments">
                <PaymentsPage />
              </Layout>
            } 
          />

          {/* Admin Page */}
          <Route 
            path="/admin" 
            element={<AdminPage />}
          />

          {/* 404 Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CMSProvider>
    </Router>
  );
}

export default App;