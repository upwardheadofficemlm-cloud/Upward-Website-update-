import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Meta Pixel ID
const META_PIXEL_ID = '571815615922033';

// Declare fbq function globally
declare global {
  interface Window {
    fbq: any;
  }
}

// Meta Pixel Hook
export const useMetaPixel = () => {
  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
      console.log('Meta Pixel Event:', eventName, parameters);
    }
  };

  const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      console.log('Meta Pixel PageView tracked');
    }
  };

  const trackCustomEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
      console.log('Meta Pixel Custom Event:', eventName, parameters);
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackCustomEvent
  };
};

// Meta Pixel Component for automatic page view tracking
export const MetaPixelTracker: React.FC = () => {
  const location = useLocation();
  const { trackPageView } = useMetaPixel();

  useEffect(() => {
    // Track page view on route change
    trackPageView();
  }, [location.pathname, trackPageView]);

  return null; // This component doesn't render anything
};

// Predefined event tracking functions
export const trackContactForm = (formType: string = 'general') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: `${formType} Contact Form`,
      content_category: 'Contact',
      value: 1,
      currency: 'USD'
    });
  }
};

export const trackServiceClick = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: serviceName,
      content_category: 'Service',
      value: 1,
      currency: 'USD'
    });
  }
};

export const trackPortfolioView = (projectName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: projectName,
      content_category: 'Portfolio',
      value: 1,
      currency: 'USD'
    });
  }
};

export const trackPaymentMethodView = (methodName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: methodName,
      content_category: 'Payment Method',
      value: 1,
      currency: 'USD'
    });
  }
};

export const trackPhoneCall = (phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Call',
      content_category: 'Contact',
      value: 1,
      currency: 'USD',
      phone_number: phoneNumber
    });
  }
};

export const trackEmailClick = (emailAddress: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Email Click',
      content_category: 'Contact',
      value: 1,
      currency: 'USD',
      email: emailAddress
    });
  }
};

export const trackSocialMediaClick = (platform: string, url: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: `${platform} Profile`,
      content_category: 'Social Media',
      value: 1,
      currency: 'USD',
      url: url
    });
  }
};

export const trackGetStartedClick = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Get Started Button',
      content_category: 'CTA',
      value: 1,
      currency: 'USD'
    });
  }
};

export const trackEmployeeLoginClick = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Employee Login',
      content_category: 'Login',
      value: 1,
      currency: 'USD'
    });
  }
};

export default MetaPixelTracker;
