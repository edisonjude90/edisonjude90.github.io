// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edison Trutwein',
  tagline: 'Edison Trutwein Blog',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://edisonjude90.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Edison Trutwein', // Usually your GitHub org/user name.
  projectName: 'edisonjude90.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/edisonjude90/edisonjude90.github.io/tree/main/docs',
        },
        blog: {
          routeBasePath: '/', 
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/edisonjude90/edisonjude90.github.io/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'google-site-verification',
          content: 'zKSHuqpTsvd9P8eQ_kk1ZvulGhsUNcb64EAQWSVy6d0'
        }
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Edison Trutwein',
        logo: {
          alt: 'edison trutwein',
          src: 'https://avatars.githubusercontent.com/u/22928888?s=400&u=5fa3c76ba6b81bf4ac1369de6c6d6c6dacd7a314&v=4',
        },
        items: [
          { to: '/', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'books',
            position: 'left',
            label: 'Books',
          },
          {
            href: 'https://github.com/edisonjude90',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `2023`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
