const users = [
  {
    caption: 'User1',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'knowledge-base', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://jeanmgirard.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'knowledge-base',
  organizationName: 'jeanmgirard',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { search: true },
    {doc: 'home',     label: 'Home'},
    {doc: 'guides',   label: 'Guides'},
    {doc: 'tools',    label: 'Tools'},
    {doc: 'lib',      label: 'Lib'},
    {doc: 'research', label: 'Research'},
    {blog: true,      label: 'Blog'},
    {page: 'help',    label: 'Help'},
    { languages: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#9a5b59',
    secondaryColor: '#6b3f3e',
  },

  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
