import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

// Clears the sticky nav, matching the offset the in-page nav links use.
const NAV_OFFSET = 80;

// Moving between pages in the browser keeps the old scroll position unless
// something resets it. Go to the linked section if there is one, such as
// /#projects from a project page, and to the top of the page otherwise.
export default function ScrollManager(): null {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET });
    } else if (!firstRender.current) {
      // On first load the browser restores the scroll position itself.
      window.scrollTo({ top: 0 });
    }
    firstRender.current = false;
  }, [pathname, hash]);

  return null;
}
