import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(cleanup);

// jsdom has no IntersectionObserver, ResizeObserver or matchMedia; the
// in-view, Headless UI and reduced-motion code paths need stand-ins.
class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal('IntersectionObserver', ObserverStub);
vi.stubGlobal('ResizeObserver', ObserverStub);

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}));

// Headless UI waits on element animations before unmounting transitions.
Element.prototype.getAnimations ??= () => [];
