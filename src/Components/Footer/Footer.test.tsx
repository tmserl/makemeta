import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />);
    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
