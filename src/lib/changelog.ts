interface iChangelog {
  date: string;
  title: string;
  description: string;
}

const changelog: iChangelog[] = [
  {
    date: 'Mar 1, 2022',
    title: 'Character Count',
    description: 'Certain input fields now have a character count.',
  },
  {
    date: 'Feb 20, 2022',
    title: 'MakeMeta is Live',
    description: 'Launched MakeMeta.',
  },
];

export default changelog;
