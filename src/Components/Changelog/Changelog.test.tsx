import { render } from '@testing-library/react';
import Changelog from '../Changelog';

describe('Changelog', () => {
  it('renders Changelog', () => {
    render(<Changelog showChangelog={true} setShowChangelog={jest.fn()} />);
    // const entryTitle = screen.getByText('MakeMeta is Live');
    // expect(entryTitle).toBeInTheDocument();
  });
});
