import React from 'react';
import { CMSProvider } from './contexts/CMSContext';
import SEOHead from './components/SEOHead';
import AdminPanel from './components/cms/AdminPanel';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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

// Create a navigation context to share navigation state
interface NavigationContextType {
  currentPage: string;
  navigateToPage: (page: string, url?: string) => void;
  scrollToSection: (sectionId: string) => void;
}

const NavigationContext = React.createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navigateToPage = (page: string, url?: string) => {
    console.log('Navigating to:', page, url);
    setCurrentPage(page);
    
    // Update browser URL if provided
    if (url && typeof window !== 'undefined') {
      window.history.pushState({}, '', url);
    }
    
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'brand-identity':
        return <BrandIdentityPage />;
      case 'digital-marketing':
        return <DigitalMarketingPage />;
      case 'social-media':
        return <SocialMediaPage />;
      case 'web-development':
        return <WebDevelopmentPage />;
      case 'content-creation':
        return <ContentCreationPage />;
      case 'seo-services':
        return <SEOServicesPage />;
      case 'billboards':
        return <BillboardsPage />;
      case 'adnova':
        return <AdNovaPage />;
      case 'about':
        return <AboutPage />;
      case 'training-center':
        return <TrainingCenterPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContext.Provider value={{ currentPage, navigateToPage, scrollToSection }}>
      <CMSProvider>
        <div className="min-h-screen">
          <SEOHead page={currentPage} />
          <Navigation currentPage={currentPage} onPageChange={navigateToPage} />
          {renderPage()}
          <Footer />
          <AdminPanel />
        </div>
      </CMSProvider>
    </NavigationContext.Provider>
  );
}

export default App;