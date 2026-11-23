import { useEffect } from 'react';
import type { PageMeta } from '@/meta';
import { renderPageHead } from '@/pageHead';

export function usePageMeta(meta: PageMeta) {
  const html = renderPageHead(meta);

  useEffect(() => {
    // Replace only route-managed tags. This also clears a 404's noindex
    // and restores the canonical when the user navigates back to content.
    const template = document.createElement('template');
    template.innerHTML = html;
    document.head.querySelectorAll('[data-page-head]').forEach((node) => node.remove());
    document.head.append(template.content);
  }, [html]);
}
