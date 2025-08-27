import React, { useEffect } from 'react';
import { updatePageSEO, getPageSEO } from '../utils/seo';

interface SEOHeadProps {
  page: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  useEffect(() => {
    const seoData = getPageSEO(page);
    updatePageSEO(seoData);
  }, [page]);

  return null; // This component doesn't render anything visible
};

export default SEOHead;