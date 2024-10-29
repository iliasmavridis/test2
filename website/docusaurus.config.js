// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Documentation',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://iliasmavridis.github.io',
  baseUrl: '/test2/pr-preview/27/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  organizationName: 'iliasmavridis',
  projectName: 'test2',
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: false,
          blogTitle: ' ',
          blogDescription: ' ',
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
      navbar: {
        title: 'Documentation',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: '© Documentation Preview',
      },
      announcementBar: {
        id: 'staging-environment',
        content: '⚠️ This is a <strong>Preview Environment</strong> for PR #27. Changes may not be final. <strong>Do not use in production.</strong>',
        backgroundColor: '#ffcc00',
        textColor: '#000000',
        isCloseable: false,
      },
    }),
};

module.exports = config;
