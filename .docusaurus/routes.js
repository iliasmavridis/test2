import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/44/markdown-page',
    component: ComponentCreator('/test2/pr-preview/44/markdown-page', 'b2e'),
    exact: true
  },
  {
    path: '/test2/pr-preview/44/',
    component: ComponentCreator('/test2/pr-preview/44/', 'c37'),
    exact: true
  },
  {
    path: '/test2/pr-preview/44/',
    component: ComponentCreator('/test2/pr-preview/44/', '8f7'),
    routes: [
      {
        path: '/test2/pr-preview/44/',
        component: ComponentCreator('/test2/pr-preview/44/', '79b'),
        routes: [
          {
            path: '/test2/pr-preview/44/',
            component: ComponentCreator('/test2/pr-preview/44/', '9a9'),
            routes: [
              {
                path: '/test2/pr-preview/44/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/44/category/tutorial---basics', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/44/category/tutorial---extras', '747'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/intro',
                component: ComponentCreator('/test2/pr-preview/44/intro', '8bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/congratulations', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/create-a-blog-post', '514'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/create-a-document', '600'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/create-a-page', '855'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/deploy-your-site', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-basics/markdown-features', 'ee4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-extras/manage-docs-versions', '81b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/44/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/44/tutorial-extras/translate-your-site', '790'),
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
