import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders hints when hint toggle button is clicked', () => {});
});
