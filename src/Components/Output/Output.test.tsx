import { render, screen } from '@testing-library/react';
import Output from '../Output';

const data = {
  title: 'MakeMeta',
  description: 'Effortlessly generate meta tags for your website.',
  url: 'https://makemeta.app',
  twitter: '@tmserl_',
  image: 'https://social-card-image.xyz/',
  alt: 'MakeMeta',
};

describe('Input', () => {
  beforeEach(() => {
    render(<Output data={data} />);
  });

  it('renders "Ta-da!"', () => {
    const taDa = screen.getByText('Ta-da!');
    expect(taDa).toBeInTheDocument();
  });

  it('renders "<title>"', () => {
    const title = screen.getByText('<title>MakeMeta</title>');
    expect(title).toBeInTheDocument();
  });

  it('renders "<!-- Twitter Meta Tags -->', () => {
    const twitter = screen.getByText('<!-- Twitter Meta Tags -->');
    expect(twitter).toBeInTheDocument();
  });

  it('renders twitter:card', () => {
    const twitterCard = screen.getByText(
      '<meta name="twitter:card" content="summary_large_image" />'
    );
    expect(twitterCard).toBeInTheDocument();
  });

  it('renders twitter:title', () => {
    const twitterTitle = screen.getByText(
      '<meta name="twitter:title" content="MakeMeta" />'
    );
    expect(twitterTitle).toBeInTheDocument();
  });

  it('renders twitter:site', () => {
    const twitterSite = screen.getByText(
      '<meta name="twitter:site" content="@tmserl_" />'
    );
    expect(twitterSite).toBeInTheDocument();
  });

  it('renders twitter:creator', () => {
    const twitterCreator = screen.getByText(
      '<meta name="twitter:creator" content="@tmserl_" />'
    );
    expect(twitterCreator).toBeInTheDocument();
  });

  it('renders twitter:description', () => {
    const twitterDescription = screen.getByText(
      '<meta name="twitter:description" content="Effortlessly generate meta tags for your website." />'
    );
    expect(twitterDescription).toBeInTheDocument();
  });

  it('renders twitter:image', () => {
    const twitterImage = screen.getByText(
      '<meta name="twitter:image" content="https://social-card-image.xyz/" />'
    );
    expect(twitterImage).toBeInTheDocument();
  });

  it('renders twitter:alt', () => {
    const twitterAlt = screen.getByText(
      '<meta name="twitter:image:alt" content="MakeMeta" />'
    );
    expect(twitterAlt).toBeInTheDocument();
  });

  it('renders "<!-- Open Graph Meta Tags -->"', () => {
    const og = screen.getByText('<!-- Open Graph Meta Tags -->');
    expect(og).toBeInTheDocument();
  });

  it('renders og:title', () => {
    const ogTitle = screen.getByText(
      '<meta property="og:title" content="MakeMeta" />'
    );
    expect(ogTitle).toBeInTheDocument();
  });

  it('renders og:description', () => {
    const ogDescription = screen.getByText(
      '<meta property="og:description" content="Effortlessly generate meta tags for your website." />'
    );
    expect(ogDescription).toBeInTheDocument();
  });

  it('renders og:url', () => {
    const ogUrl = screen.getByText(
      '<meta property="og:url" content="https://makemeta.app" />'
    );
    expect(ogUrl).toBeInTheDocument();
  });

  it('renders og:image', () => {
    const ogImage = screen.getByText(
      '<meta property="og:image" content="https://social-card-image.xyz/" />'
    );
    expect(ogImage).toBeInTheDocument();
  });

  it('renders og:image:alt', () => {
    const ogImageAlt = screen.getByText(
      '<meta property="og:image:alt" content="MakeMeta" />'
    );
    expect(ogImageAlt).toBeInTheDocument();
  });

  it('renders "<!-- Facebook Meta Tags -->', () => {
    const facebook = screen.getByText('<!-- Facebook Meta Tags -->');
    expect(facebook).toBeInTheDocument();
  });

  it('renders og:site_name', () => {
    const ogSiteName = screen.getByText(
      '<meta property="og:site_name" content="MakeMeta" />'
    );
    expect(ogSiteName).toBeInTheDocument();
  });

  it('renders MakeMeta plug', () => {
    const makeMeta = screen.getByText(
      '<!-- Meta Tags generated using https://makemeta.app -->'
    );
    expect(makeMeta).toBeInTheDocument();
  });
});
