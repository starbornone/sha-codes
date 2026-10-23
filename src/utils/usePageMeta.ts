import { useEffect } from 'react';
import { absoluteUrl, PageMeta } from '@/meta';

function setContent(selector: string, value: string, attribute = 'content') {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
}

// Each page's HTML already carries its own head tags from the prerender. This
// updates them when the browser moves between pages without a reload, so the
// tab title and any share sheet match the page on screen.
export function usePageMeta({ path, title, description, image, imageAlt }: PageMeta) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);
    document.title = title;
    setContent('meta[name="description"]', description);
    setContent('link[rel="canonical"]', url, 'href');
    setContent('meta[property="og:url"]', url);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
    setContent('meta[property="og:image"]', imageUrl);
    setContent('meta[property="og:image:alt"]', imageAlt);
    setContent('meta[name="twitter:title"]', title);
    setContent('meta[name="twitter:description"]', description);
    setContent('meta[name="twitter:image"]', imageUrl);
  }, [path, title, description, image, imageAlt]);
}
