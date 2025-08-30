export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
  noindex?: boolean;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', seoData.description);
  updateMetaTag('keywords', seoData.keywords);

  // Robots (noindex/nofollow)
  if (seoData.noindex) {
    updateMetaTag('robots', 'noindex, nofollow');
  } else {
    // Ensure robots tag does not block indexing for other pages
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.remove();
    }
  }

  // Open Graph tags
  updateMetaTag('og:title', seoData.ogTitle || seoData.title, true);
  updateMetaTag('og:description', seoData.ogDescription || seoData.description, true);
  updateMetaTag('og:type', 'website', true);
  updateMetaTag('og:site_name', 'Upward Marketing House', true);
  
  if (seoData.ogImage) {
    updateMetaTag('og:image', seoData.ogImage, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.ogTitle || seoData.title);
  updateMetaTag('twitter:description', seoData.ogDescription || seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('twitter:image', seoData.ogImage);
  }

  // Canonical URL
  if (seoData.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonicalUrl);
  }

  // Structured data
  if (seoData.structuredData) {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(seoData.structuredData);
    document.head.appendChild(script);
  }
};

export const getPageSEO = (page: string): SEOData => {
  const baseUrl = 'https://upwardmm.com';
  const defaultImage = `${baseUrl}/upward_logo_primary-blue.png`;

  const seoData: { [key: string]: SEOData } = {
    home: {
      title: 'Upward - Accelerating Your Business Wings! | 360° Marketing Solutions | Mawlamyine, Myanmar',
      description: 'Accelerating your business wings with comprehensive marketing strategies. From digital campaigns to brand identity, we deliver results that drive growth in Mawlamyine, Myanmar. Trusted by 500+ businesses.',
      keywords: 'marketing agency, Mawlamyine, Myanmar, digital marketing, branding, web development, social media, SEO, advertising, accelerating business wings, Myanmar marketing agency, Mawlamyine marketing',
      ogTitle: 'Upward - Accelerating Your Business Wings! | 360° Marketing Solutions',
      ogDescription: 'Accelerating your business wings with innovative 360° marketing solutions in Mawlamyine, Myanmar. Trusted by 500+ businesses.',
      ogImage: defaultImage,
      canonicalUrl: baseUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Upward Marketing Agency",
        "alternateName": "Upward",
        "url": baseUrl,
        "logo": defaultImage,
        "description": "Mawlamyine's premier 360° marketing agency providing comprehensive marketing solutions",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "39 (A), 3rd Floor, Taung Wine Road",
          "addressLocality": "Mawlamyine",
          "addressRegion": "Mon State",
          "addressCountry": "Myanmar"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+95-9740977946",
          "contactType": "customer service",
          "availableLanguage": ["English", "Myanmar"]
        },
        "sameAs": [
          "https://facebook.com/upwardmm",
          "https://instagram.com/upwardmm",
          "https://linkedin.com/company/upwardmm"
        ],
        "foundingDate": "2021-07-15",
        "numberOfEmployees": "20-50",
        "slogan": "Accelerating Your Business Wings!",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "Country",
          "name": "Myanmar"
        }
      }
    },
    
    services: {
      title: 'Marketing Services | 360° Solutions | Upward Marketing Agency Myanmar',
      description: 'Comprehensive marketing services including brand identity, digital marketing, social media, web development, content creation, and SEO services in Mawlamyine, Myanmar. Expert team with proven results.',
      keywords: 'marketing services, brand identity, digital marketing, social media marketing, web development, content creation, SEO services, Myanmar marketing, Mawlamyine marketing agency, professional marketing',
      canonicalUrl: `${baseUrl}/services`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "360° Marketing Services",
        "provider": {
          "@type": "Organization",
          "name": "Upward Marketing Agency",
          "url": baseUrl
        },
        "serviceType": "Marketing Services",
        "description": "Comprehensive 360° marketing solutions including brand identity, digital marketing, social media, web development, content creation, and SEO services",
        "areaServed": {
          "@type": "Place",
          "name": "Myanmar"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "MMK",
          "priceRange": "500,000 - 5,000,000 MMK"
        }
      }
    },

    'brand-identity': {
      title: 'Brand Identity Design Services | Logo & Branding | Upward Myanmar',
      description: 'Professional brand identity design services including logo design, brand guidelines, and visual identity development for Myanmar businesses. Create a memorable brand that stands out.',
      keywords: 'brand identity, logo design, brand guidelines, visual identity, branding services, Myanmar branding, Mawlamyine design, brand development, corporate identity',
      canonicalUrl: `${baseUrl}/brand-identity`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Brand Identity Design",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Brand Identity Design",
          "description": "Complete brand development from logo design to brand guidelines that make you stand out",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "300,000 - 2,000,000 MMK"
          }
        }
    },

    'digital-marketing': {
      title: 'Digital Marketing Services | SEO, SEM, Google Ads | Upward Myanmar',
      description: 'Professional digital marketing services including SEO, Google Ads, social media advertising, and analytics for Myanmar businesses. Drive traffic and increase conversions.',
      keywords: 'digital marketing, SEO, Google Ads, SEM, social media advertising, Myanmar digital marketing, Mawlamyine SEO, online marketing, digital advertising',
      canonicalUrl: `${baseUrl}/digital-marketing`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Digital Marketing",
          "description": "SEO, SEM, and digital advertising strategies that drive traffic and conversions",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "500,000 - 3,000,000 MMK"
          }
        }
    },

    'social-media': {
      title: 'Social Media Marketing | Facebook, Instagram, LinkedIn | Upward Myanmar',
      description: 'Expert social media marketing services including content creation, community management, and social advertising for Myanmar businesses. Build your brand presence online.',
      keywords: 'social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, social media management, Myanmar social media, social media strategy, content creation',
      canonicalUrl: `${baseUrl}/social-media`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Social Media Marketing",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Social Media Marketing",
          "description": "Engaging social media campaigns that build communities and boost brand awareness",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "300,000 - 2,500,000 MMK"
          }
        }
    },

    'web-development': {
      title: 'Web Development Services | Websites & E-commerce | Upward Myanmar',
      description: 'Professional web development services including responsive websites, e-commerce platforms, and web applications for Myanmar businesses. Modern, fast, and conversion-focused websites.',
      keywords: 'web development, website design, e-commerce development, responsive websites, Myanmar web development, Mawlamyine web design, custom websites, e-commerce platforms',
      canonicalUrl: `${baseUrl}/web-development`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Development Services",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Web Development",
          "description": "Modern, responsive websites and e-commerce platforms that convert visitors",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "800,000 - 5,000,000 MMK"
          }
        }
    },

    'content-creation': {
      title: 'Content Creation Services | Video, Photography, Design | Upward Myanmar',
      description: 'Professional content creation services including video production, photography, graphic design, and copywriting for Myanmar businesses. High-quality content that engages your audience.',
      keywords: 'content creation, video production, photography, graphic design, copywriting, Myanmar content creation, Mawlamyine video production, creative content, marketing content',
      canonicalUrl: `${baseUrl}/content-creation`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Content Creation Services",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Content Creation",
          "description": "High-quality video, photography, and graphic content that tells your story",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "200,000 - 3,000,000 MMK"
          }
        }
    },

    'seo-services': {
      title: 'SEO Services | Search Engine Optimization | Upward Myanmar',
      description: 'Professional SEO services to improve search engine rankings and drive organic traffic for Myanmar businesses. Increase your visibility and grow your business organically.',
      keywords: 'SEO services, search engine optimization, Google ranking, organic traffic, Myanmar SEO, Mawlamyine SEO services, local SEO, keyword optimization',
      canonicalUrl: `${baseUrl}/seo-services`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Search Engine Optimization",
          "description": "Dominate search engine results and drive organic traffic to your website",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "400,000 - 2,500,000 MMK"
          }
        }
    },

    about: {
      title: 'About Upward Marketing Agency | Our Story & Team | Mawlamyine Myanmar',
      description: 'Learn about Upward Marketing Agency, Mawlamyine\'s premier marketing agency since 2021. Meet our team and discover our journey of transforming Myanmar businesses. Trusted by 500+ clients.',
      keywords: 'about upward, marketing agency Myanmar, Mawlamyine marketing agency, our team, company history, Myanmar marketing experts, upward story, marketing agency about',
      canonicalUrl: `${baseUrl}/about`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "foundingDate": "2021-07-15",
            "foundingLocation": {
              "@type": "Place",
              "name": "Mawlamyine, Myanmar"
            },
            "description": "Mawlamyine's premier marketing agency transforming businesses through innovative strategies",
            "url": baseUrl,
            "numberOfEmployees": "20-50",
            "award": "Best Marketing Agency 2023"
          }
        }
    },

    portfolio: {
      title: 'Portfolio | Our Work & Case Studies | Upward Marketing Agency Myanmar',
      description: 'Explore our portfolio of successful marketing campaigns and projects for Myanmar businesses. See case studies and results from our 500+ clients. View our award-winning work.',
      keywords: 'marketing portfolio, case studies, successful campaigns, Myanmar marketing projects, Mawlamyine marketing work, client results, upward portfolio, marketing case studies',
      canonicalUrl: `${baseUrl}/portfolio`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Marketing Portfolio",
          "description": "Showcasing successful campaigns that delivered real results for Myanmar businesses",
          "publisher": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "numberOfItems": "500+"
        }
    },

    team: {
      title: 'Our Team | Marketing Experts | Upward Marketing Agency Myanmar',
      description: 'Meet the passionate marketing professionals behind Upward\'s success. Our diverse team of experts in Mawlamyine, Myanmar. Experienced professionals dedicated to your success.',
      keywords: 'marketing team, Myanmar marketing experts, Mawlamyine marketing professionals, creative team, digital marketing specialists, upward team, marketing professionals',
      canonicalUrl: `${baseUrl}/team`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Upward Marketing Agency",
          "url": baseUrl,
          "employee": [
            {
              "@type": "Person",
              "name": "Thura Aung",
              "jobTitle": "Creative Director & Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Upward Marketing Agency"
              },
              "knowsAbout": ["Digital Marketing", "Brand Strategy", "Creative Direction"]
            }
          ]
        }
    },

    contact: {
      title: 'Contact Us | Get Free Consultation | Upward Marketing Agency Myanmar',
      description: 'Contact Upward Marketing Agency in Mawlamyine for your marketing needs. Get free consultation and start your project today. Call +95-9740977946 or email contact@upwardmm.com',
      keywords: 'contact upward, marketing consultation, Mawlamyine marketing agency contact, free consultation, marketing quote Myanmar, upward contact, Myanmar marketing agency contact',
      canonicalUrl: `${baseUrl}/contact`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "39 (A), 3rd Floor, Taung Wine Road",
              "addressLocality": "Mawlamyine",
              "addressRegion": "Mon State",
              "postalCode": "12345",
              "addressCountry": "Myanmar"
            },
            "telephone": "+95-9740977946",
            "email": "contact@upwardmm.com",
            "url": baseUrl,
            "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-15:00"
          }
        }
    },

    'training-center': {
      title: 'Marketing Training Center | Professional Courses | Upward Myanmar',
      description: 'Professional marketing training courses in Mawlamyine. Learn digital marketing, social media, SEO, and more from industry experts. Advance your career with certified courses.',
      keywords: 'marketing training, digital marketing courses, Myanmar marketing education, Mawlamyine training center, professional development, marketing certification, upward training',
      canonicalUrl: `${baseUrl}/training-center`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Upward Training Center",
          "description": "Professional marketing training center offering courses in digital marketing, social media, and more",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "39 (A), 3rd Floor, Taung Wine Road",
            "addressLocality": "Mawlamyine",
            "addressRegion": "Mon State",
            "addressCountry": "Myanmar"
          },
          "url": baseUrl,
          "telephone": "+95-9740977946",
          "course": [
            {
              "@type": "Course",
              "name": "Digital Marketing Fundamentals",
              "description": "Learn the basics of digital marketing including SEO, SEM, and social media"
            },
            {
              "@type": "Course", 
              "name": "Social Media Marketing",
              "description": "Master social media marketing strategies for business growth"
            }
          ]
        }
    },

    billboards: {
      title: 'Billboard Advertising | Outdoor Marketing | Upward Mawlamyine Myanmar',
      description: 'Strategic billboard advertising services in Mawlamyine. Dominate the skyline with premium outdoor advertising locations across the city. High-visibility advertising solutions.',
      keywords: 'billboard advertising, outdoor advertising, Mawlamyine billboards, Myanmar outdoor marketing, street advertising, outdoor billboards, highway advertising',
      canonicalUrl: `${baseUrl}/billboards`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Billboard Advertising",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Outdoor Advertising",
          "description": "Strategic billboard placements across Mawlamyine's busiest areas",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "1,000,000 - 10,000,000 MMK"
          }
        }
    },

    adnova: {
      title: 'AdNova Digital Signage | Smart Advertising | Upward Mawlamyine Myanmar',
      description: 'Mawlamyine\'s first smart digital signage advertising system. 65-inch Full HD displays in premium shopping centers. Interactive digital advertising solutions.',
      keywords: 'digital signage, smart advertising, AdNova, Mawlamyine digital advertising, interactive displays, shopping center advertising, digital billboards, smart displays',
      canonicalUrl: `${baseUrl}/adnova`,
              structuredData: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AdNova Digital Signage",
          "provider": {
            "@type": "Organization",
            "name": "Upward Marketing Agency",
            "url": baseUrl
          },
          "serviceType": "Digital Signage Advertising",
          "description": "Mawlamyine's first smart digital signage advertising system with 65-inch Full HD displays",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "MMK",
            "priceRange": "2,000,000 - 15,000,000 MMK"
          }
        }
    }
    ,
    payments: {
      title: 'Payments | Upward',
      description: 'Private payments page for clients. Not indexed by search engines.',
      keywords: 'payments, invoice, billing',
      canonicalUrl: `${baseUrl}/payments`,
      noindex: true
    },

    // Proposal pages - all with noindex to prevent search engine crawling
    'digital-marketing-proposal': {
      title: 'Digital Marketing Proposal | Upward',
      description: 'Private digital marketing proposal. Not indexed by search engines.',
      keywords: 'digital marketing proposal, SEO, PPC, social media marketing',
      canonicalUrl: `${baseUrl}/proposals/digital-marketing`,
      noindex: true
    },

    'web-development-proposal': {
      title: 'Web Development Proposal | Upward',
      description: 'Private web development proposal. Not indexed by search engines.',
      keywords: 'web development proposal, website design, custom development',
      canonicalUrl: `${baseUrl}/proposals/web-development`,
      noindex: true
    },

    'brand-identity-proposal': {
      title: 'Brand Identity Proposal | Upward',
      description: 'Private brand identity proposal. Not indexed by search engines.',
      keywords: 'brand identity proposal, logo design, branding services',
      canonicalUrl: `${baseUrl}/proposals/brand-identity`,
      noindex: true
    },

    'social-media-proposal': {
      title: 'Social Media Marketing Proposal | Upward',
      description: 'Private social media marketing proposal. Not indexed by search engines.',
      keywords: 'social media proposal, social media marketing, content creation',
      canonicalUrl: `${baseUrl}/proposals/social-media`,
      noindex: true
    },

    'content-creation-proposal': {
      title: 'Content Creation Proposal | Upward',
      description: 'Private content creation proposal. Not indexed by search engines.',
      keywords: 'content creation proposal, video production, photography, design',
      canonicalUrl: `${baseUrl}/proposals/content-creation`,
      noindex: true
    },

    'seo-services-proposal': {
      title: 'SEO Services Proposal | Upward',
      description: 'Private SEO services proposal. Not indexed by search engines.',
      keywords: 'SEO services proposal, search engine optimization, keyword optimization',
      canonicalUrl: `${baseUrl}/proposals/seo-services`,
      noindex: true
    },

    'proposal': {
      title: 'Proposal | Upward',
      description: 'Private proposal page. Not indexed by search engines.',
      keywords: 'proposal, marketing services, business proposal',
      canonicalUrl: `${baseUrl}/proposals`,
      noindex: true
    }
  };

  return seoData[page] || seoData.home;
};