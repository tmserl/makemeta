interface iChangelog {
  date: string;
  title: string;
  version: string;
  description: string[];
}

const changelog: iChangelog[] = [
  {
    date: 'Mar X, 2022',
    title: 'Behind the Scenes',
    version: '1.4',
    description: [
      'This update mostly focuses on backend improvements and code refractoring.',
      'Fix: A bug that would cause the output meta data to add unnecessary spaces when copying and pasting manually.',
      'Fix: Placeholder text is now an appropriate size on mobile devices.',
    ],
  },
  {
    date: 'Mar 18, 2022',
    title: 'Copy (and paste!)',
    version: '1.3',
    description: [
      "Copying and pasting your meta tags is now easier thanks to a handy little 'copy' button at the bottom of the output.",
      'Animations have been improved and are now smoother.',
    ],
  },
  {
    date: 'Mar 7, 2022',
    title: 'Helpful Hints',
    version: '1.2',
    description: ["Helpful 'hints' for each input field can now be toggled."],
  },
  {
    date: 'Mar 1, 2022',
    title: 'Character Count',
    version: '1.1',
    description: [
      "Blink and you'll miss it!",
      "Character counts can now be found on certain fields. When you're over the limit, they will (politely) let you know!",
    ],
  },
  {
    date: 'Feb 20, 2022',
    title: 'MakeMeta is Live',
    version: '1.0',
    description: [
      'Launched MakeMeta; a no-frills, super simple tool to generate all the essential Meta Tags you need for your website.',
    ],
  },
];

export default changelog;
