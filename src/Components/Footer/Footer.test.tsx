import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  it('renders footer', () => {
    render(<Footer />);
    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
