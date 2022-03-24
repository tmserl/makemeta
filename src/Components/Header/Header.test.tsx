import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  beforeEach(() => {
    render(<Header showChangelog={false} setShowChangelog={jest.fn()} />);
  });

  it('renders MakeMeta title and subtitle', () => {
    const heading = screen.getByText(/MakeMeta/i);
    const subtitle = screen.getByText(/Generate Meta Tags for your website/i);

    expect(heading).toBeVisible();
    expect(subtitle).toBeVisible();
  });

  it('renders Changelog button', () => {
    const changelog = screen.getByText("What's new?");

    expect(changelog).toBeVisible();
    expect(changelog).toHaveClass('whats-new');
  });
});
