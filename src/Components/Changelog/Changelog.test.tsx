import { render, screen } from '@testing-library/react';
import Changelog from '../Changelog';
import changelog from '../../lib/changelog';

describe('Changelog', () => {
  beforeEach(() => {});

  it('renders Changelog', () => {
    render(<Changelog showChangelog={true} setShowChangelog={jest.fn()} />);

    const entryTitle = screen.getByText('MakeMeta is Live');

    expect(entryTitle).toBeInTheDocument();
  });
});
