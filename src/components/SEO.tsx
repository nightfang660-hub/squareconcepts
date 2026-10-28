import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://www.squareconcepts.co.in';

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  keywords?: string;
  schema?: Record<string, any>;
}

function setOrCreateMeta(selector: string, attributes: { [key: string]: string }) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function setOrCreateCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  path,
  image = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
  type = 'website',
  keywords,
  schema
}: SEOProps) {
  const location = useLocation();
  const canonicalPath = path || location.pathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    setOrCreateMeta('meta[name="description"]', {
      name: 'description',
      content: description
    });

    // 3. Update Meta Title
    setOrCreateMeta('meta[name="title"]', {
      name: 'title',
      content: title
    });

    // 4. Update Canonical URL
    setOrCreateCanonical(canonicalUrl);

    // 5. Update Open Graph Tags
    setOrCreateMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title
    });
    setOrCreateMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description
    });
    setOrCreateMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl
    });
    setOrCreateMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: type
    });
    setOrCreateMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: image
    });

    // 6. Update Twitter Card Tags
    setOrCreateMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title
    });
    setOrCreateMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });
    setOrCreateMeta('meta[name="twitter:url"]', {
      name: 'twitter:url',
      content: canonicalUrl
    });
    setOrCreateMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image
    });

    // 7. Update Keywords if provided
    if (keywords) {
      setOrCreateMeta('meta[name="keywords"]', {
        name: 'keywords',
        content: keywords
      });
    }

    // 8. Dynamic Page Schema if provided
    let scriptTag = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-page-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, image, type, keywords, schema]);

  return null;
}
