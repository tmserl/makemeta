import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  it('renders MakeMeta title and subtitle', () => {
    render(<Header />);

    const heading = screen.getByText(/MakeMeta/i);
    const subtitle = screen.getByText(/Generate Meta Tags for your website/i);

    expect(heading).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it('renders Changelog button', () => {
    render(<Header />);

    const changelog = screen.getByText("What's new?");

    expect(changelog).toBeInTheDocument();
    expect(changelog).toHaveClass('whats-new');
  });
});
