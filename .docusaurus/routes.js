import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/42/markdown-page',
    component: ComponentCreator('/test2/pr-preview/42/markdown-page', 'c7e'),
    exact: true
  },
  {
    path: '/test2/pr-preview/42/',
    component: ComponentCreator('/test2/pr-preview/42/', '9d9'),
    exact: true
  },
  {
    path: '/test2/pr-preview/42/',
    component: ComponentCreator('/test2/pr-preview/42/', '6d5'),
    routes: [
      {
        path: '/test2/pr-preview/42/',
        component: ComponentCreator('/test2/pr-preview/42/', '482'),
        routes: [
          {
            path: '/test2/pr-preview/42/',
            component: ComponentCreator('/test2/pr-preview/42/', 'd23'),
            routes: [
              {
                path: '/test2/pr-preview/42/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/42/category/tutorial---basics', '42c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/42/category/tutorial---extras', '54c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/intro',
                component: ComponentCreator('/test2/pr-preview/42/intro', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/congratulations', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/create-a-blog-post', '089'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/create-a-document', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/create-a-page', '408'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/deploy-your-site', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-basics/markdown-features', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-extras/manage-docs-versions', '89b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/42/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/42/tutorial-extras/translate-your-site', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
