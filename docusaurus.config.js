const config = {
  title: 'Documentation',
  tagline: 'Documentation',
  url: 'https://iliasmavridis.github.io',
  baseUrl: '/test2/pr-preview/40/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'iliasmavridis',
  projectName: 'test2',
  trailingSlash: false,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Documentation',
      items: [{type:'docSidebar',sidebarId:'tutorialSidebar',position:'left',label:'Docs'}]
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: '© Documentation Preview'
    },
    announcementBar: {
      id: 'staging-environment',
      content: '⚠️ This is a <strong>Preview Environment</strong> for PR #40. Changes may not be final. <strong>Do not use in production.</strong>',
      backgroundColor: '#ffcc00',
      textColor: '#000000',
      isCloseable: false
    }
  }
};
module.exports = config;
