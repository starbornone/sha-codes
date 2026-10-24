import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EXPERIENCE } from '@/data/experience';
import Experience from '@/sections/Experience';

describe('Experience', () => {
  it('lists every role in order', () => {
    render(<Experience />);

    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(EXPERIENCE.length);
    for (const [index, role] of EXPERIENCE.entries()) {
      expect(headings[index]).toHaveTextContent(role.name);
    }
  });

  it('groups a long role by theme with only the first theme open', () => {
    const { container } = render(<Experience />);
    const groups = EXPERIENCE[0].groups ?? [];

    const details = container.querySelectorAll('details');
    expect(details).toHaveLength(groups.length);
    expect(details[0]).toHaveAttribute('open');
    for (const [index, group] of groups.entries()) {
      expect(details[index].querySelector('summary')).toHaveTextContent(group.title);
      if (index > 0) expect(details[index]).not.toHaveAttribute('open');
    }
  });

  it('shows colleague testimonials under the Livn role', () => {
    render(<Experience />);
    const livn = EXPERIENCE.find((role) => role.name === 'Livn');

    for (const testimonial of livn?.testimonials ?? []) {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    }
    expect(screen.getByRole('link', { name: /full recommendations/ })).toHaveAttribute(
      'href',
      expect.stringContaining('/details/recommendations/'),
    );
  });

  it('keeps internal team names off the site', () => {
    const text = JSON.stringify(EXPERIENCE);
    for (const team of ['Lovelace', 'Zuse', 'Shared Services', 'Liveclicker']) {
      expect(text).not.toContain(team);
    }
  });
});
