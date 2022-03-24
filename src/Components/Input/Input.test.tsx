import { render, screen } from '@testing-library/react';
import Input from '../Input';

const data = {
  title: 'MakeMeta',
  description: 'Effortlessly generate meta tags for your website.',
  url: 'https://makemeta.app',
  twitter: '@tmserl_',
  image: 'https://social-card-image.xyz/',
  alt: 'MakeMeta',
};

const counter = [0, 0, 0];

describe('Input Text', () => {
  beforeEach(() => {
    render(
      <Input
        handleChange={jest.fn()}
        handleCounter={jest.fn()}
        data={data}
        counter={counter}
      />
    );
  });

  it('renders "Start here"', () => {
    const startHere = screen.getByText(/Start here/i);
    expect(startHere).toBeVisible();
  });

  it('renders "Whats the name of your site?"', () => {
    const name = screen.getByText(/What's the name of your site?/i);
    expect(name).toBeVisible();
  });

  it('renders "How would you describe your site?"', () => {
    const describe = screen.getByText(/How would you describe your site?/i);
    expect(describe).toBeVisible();
  });

  it('renders "Whats the URL for your site?"', () => {
    const url = screen.getByText(/What's the URL for your site?/i);
    expect(url).toBeVisible();
  });

  it('renders "Whats your Twitter handle?"', () => {
    const twitter = screen.getByText(/What's your Twitter handle?/i);
    expect(twitter).toBeVisible();
  });

  it('renders "Link (URL) to an image"', () => {
    const image = screen.getByText('Link (URL) to an image?');
    expect(image).toBeVisible();
  });

  it('renders "Whats the alt text for your image?"', () => {
    const alt = screen.getByText(/What's the alt text for your image?/i);
    expect(alt).toBeVisible();
  });

  it('renders hint toggle button', () => {
    const hintToggle = screen.getByText('?');
    expect(hintToggle).toBeVisible();
  });
});
