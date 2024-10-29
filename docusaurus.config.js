const config = {
  title: 'Documentation',
  tagline: 'Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://iliasmavridis.github.io',
  baseUrl: '/test2/pr-preview/33/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  organizationName: 'iliasmavridis',
  projectName: 'test2',
  presets: [['classic',{docs:{sidebarPath:require.resolve('./sidebars.js'),routeBasePath:'/'},blog:{showReadingTime:false,blogTitle:' ',blogDescription:' '},theme:{customCss:require.resolve('./src/css/custom.css')}}]],
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
      content: '⚠️ This is a <strong>Preview Environment</strong> for PR #33. Changes may not be final. <strong>Do not use in production.</strong>',
      backgroundColor: '#ffcc00',
      textColor: '#000000',
      isCloseable: false
    }
  }
};
module.exports = config;
