import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '@/components/ErrorBoundary';

function Broken(): JSX.Element {
  throw new Error('chunk failed');
}

describe('ErrorBoundary', () => {
  it('shows a reload prompt instead of a blank page', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <Broken />
      </ErrorBoundary>
    );

    expect(screen.getByRole('button', { name: 'Reload' })).toBeInTheDocument();
  });
});
