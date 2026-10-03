import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'AxentAI Labs — Growth, Distribution, Reputation & GitHub Strategy';
const DEFAULT_DESCRIPTION = 'AxentAI Labs — High-Impact Product Hunt Launches, Organic Social Distribution (X & LinkedIn), Reputation & GitHub Growth, and Tech Influencer Strategy.';
const DEFAULT_CANONICAL = 'https://axentailabs.com/';
const DEFAULT_OG_IMAGE = 'https://axentailabs.com/assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalUrl = DEFAULT_CANONICAL,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  jsonLd,
  noIndex = false,
}) => {
  // Direct DOM backup update to guarantee instant sync in all browser & headless environments
  useEffect(() => {
    document.title = title;

    const setMeta = (nameOrProp: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${nameOrProp}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameOrProp, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    if (noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow');
    }

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD script tag
    let dynamicLd = document.getElementById('dynamic-jsonld');
    if (jsonLd) {
      if (!dynamicLd) {
        dynamicLd = document.createElement('script');
        dynamicLd.setAttribute('type', 'application/ld+json');
        dynamicLd.setAttribute('id', 'dynamic-jsonld');
        document.head.appendChild(dynamicLd);
      }
      dynamicLd.textContent = JSON.stringify(jsonLd);
    } else if (dynamicLd) {
      dynamicLd.remove();
    }
  }, [title, description, canonicalUrl, ogType, ogImage, keywords, jsonLd, noIndex]);

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="AxentAI Labs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
