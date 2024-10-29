const config = {
  title: 'Documentation',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://iliasmavridis.github.io',
  baseUrl: '/test2/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
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
      copyright: '© Documentation'
    }
  }
};

module.exports = config;
