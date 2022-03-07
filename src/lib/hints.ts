interface iHints {
  title: string;
  description: string;
  url: string;
  twitter: string;
  img: string;
  alt: string;
}

const hints: iHints = {
  title:
    'The title of your website as it should appear on Google or Social Media posts.',
  description: 'A short, helpful description of your website.',
  url: 'The main URL for your website.',
  twitter: 'Your Twitter @handle.',
  img: 'A URL to a unique image for your website. Ideally in a 2:1 aspect ratio.',
  alt: "Describe what's happening in your image, or if its a logo, simply repeat the text in the image.",
};

export default hints;
