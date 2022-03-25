import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import hints from '../../lib/hints';

describe('App Buttons', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders changelog when "Whats new?" is clicked', () => {
    const changeLogButton = screen.getByText(/What's new/i);

    userEvent.click(changeLogButton);

    expect(screen.getByText('MakeMeta is Live')).toBeInTheDocument();
  });

  it('renders hints when hint toggle button is clicked', () => {
    const hintToggle = screen.getByText('?');
    const hint = hints.title;

    userEvent.click(hintToggle);

    expect(screen.getByText(hint)).toBeInTheDocument();
  });
});

describe('App Input to Output', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders prints appropriate output when text is inputted into "Whats the name of your site?"', () => {
    userEvent.type(screen.getByPlaceholderText('MakeMeta'), 'MakeMeta');

    expect(screen.getByText('<title>MakeMeta</title>')).toBeInTheDocument();
  });

  it('renders prints appropriate output when text is inputted into "How would you describe your site?"', () => {
    userEvent.type(
      screen.getByPlaceholderText(
        'Effortlessly generate Meta Tags for your website'
      ),
      'Effortlessly generate meta tags for your site!'
    );

    expect(
      screen.getByText(
        '<meta name="twitter:description" content="Effortlessly generate meta tags for your site!" />'
      )
    ).toBeInTheDocument();
  });

  it('renders prints appropriate output when text is inputted into "Whats the URL for your site?"', () => {
    userEvent.type(
      screen.getByPlaceholderText('https://makemeta.app'),
      'https://makemeta.app'
    );

    expect(
      screen.getByText(
        '<meta property="og:url" content="https://makemeta.app" />'
      )
    ).toBeInTheDocument();
  });

  it('renders prints appropriate output when text is inputted into "Whats the Twitter handle?"', () => {
    userEvent.type(screen.getByPlaceholderText('@tmserl_'), '@tmserl_');

    expect(
      screen.getByText('<meta name="twitter:site" content="@tmserl_" />')
    ).toBeInTheDocument();
  });

  it('renders prints appropriate output when text is inputted into "Link (URL) to an image?"', () => {
    userEvent.type(
      screen.getByPlaceholderText('https://social-card-image.xyz/'),
      'https://social-card-image.xyz/'
    );

    expect(
      screen.getByText(
        '<meta property="og:image" content="https://social-card-image.xyz/" />'
      )
    ).toBeInTheDocument();
  });

  it('renders prints appropriate output when text is inputted into "Whats the alt text for your image?"', () => {
    userEvent.type(screen.getByPlaceholderText('MakeMeta Logo'), 'MakeMeta');

    expect(
      screen.getByText('<meta property="og:image:alt" content="MakeMeta" />')
    ).toBeInTheDocument();
  });
});

describe('App Counter', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('increases the counter number when text in "Whats the name of your site?" is inputted ', () => {
    userEvent.type(screen.getByPlaceholderText('MakeMeta'), 'MakeMeta');

    expect(screen.getByText('8 / 60')).toBeInTheDocument();
  });
});
