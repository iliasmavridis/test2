import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/41/markdown-page',
    component: ComponentCreator('/test2/pr-preview/41/markdown-page', 'ba4'),
    exact: true
  },
  {
    path: '/test2/pr-preview/41/',
    component: ComponentCreator('/test2/pr-preview/41/', 'b5d'),
    exact: true
  },
  {
    path: '/test2/pr-preview/41/',
    component: ComponentCreator('/test2/pr-preview/41/', 'd69'),
    routes: [
      {
        path: '/test2/pr-preview/41/',
        component: ComponentCreator('/test2/pr-preview/41/', '022'),
        routes: [
          {
            path: '/test2/pr-preview/41/',
            component: ComponentCreator('/test2/pr-preview/41/', 'ae3'),
            routes: [
              {
                path: '/test2/pr-preview/41/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/41/category/tutorial---basics', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/41/category/tutorial---extras', '9d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/intro',
                component: ComponentCreator('/test2/pr-preview/41/intro', '677'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/congratulations', '6b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/create-a-blog-post', '6a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/create-a-document', 'dc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/create-a-page', 'd08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/deploy-your-site', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-basics/markdown-features', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-extras/manage-docs-versions', '4b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/41/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/41/tutorial-extras/translate-your-site', 'c10'),
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
