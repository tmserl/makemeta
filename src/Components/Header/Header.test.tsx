import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders MakeMeta title and subtitle', () => {
    render(<Header />);

    const heading = screen.getByText(/MakeMeta/i);
    const subtitle = screen.getByText(/Generate Meta Tags for your website/i);

    expect(heading).toBeVisible();
    expect(subtitle).toBeVisible();
  });

  it('renders Changelog button', () => {
    render(<Header />);

    const changelog = screen.getByText("What's new?");

    expect(changelog).toBeVisible();
    expect(changelog).toHaveClass('whats-new');
  });
});
