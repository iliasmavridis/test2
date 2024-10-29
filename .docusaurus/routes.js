import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/40/markdown-page',
    component: ComponentCreator('/test2/pr-preview/40/markdown-page', '890'),
    exact: true
  },
  {
    path: '/test2/pr-preview/40/',
    component: ComponentCreator('/test2/pr-preview/40/', 'ad0'),
    exact: true
  },
  {
    path: '/test2/pr-preview/40/',
    component: ComponentCreator('/test2/pr-preview/40/', '7f9'),
    routes: [
      {
        path: '/test2/pr-preview/40/',
        component: ComponentCreator('/test2/pr-preview/40/', '577'),
        routes: [
          {
            path: '/test2/pr-preview/40/',
            component: ComponentCreator('/test2/pr-preview/40/', '042'),
            routes: [
              {
                path: '/test2/pr-preview/40/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/40/category/tutorial---basics', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/40/category/tutorial---extras', '936'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/intro',
                component: ComponentCreator('/test2/pr-preview/40/intro', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/congratulations', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/create-a-blog-post', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/create-a-document', 'ef2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/create-a-page', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/deploy-your-site', 'f75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-basics/markdown-features', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-extras/manage-docs-versions', '250'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/40/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/40/tutorial-extras/translate-your-site', '7d1'),
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
