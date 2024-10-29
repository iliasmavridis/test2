import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/43/markdown-page',
    component: ComponentCreator('/test2/pr-preview/43/markdown-page', 'b7e'),
    exact: true
  },
  {
    path: '/test2/pr-preview/43/',
    component: ComponentCreator('/test2/pr-preview/43/', 'f6f'),
    exact: true
  },
  {
    path: '/test2/pr-preview/43/',
    component: ComponentCreator('/test2/pr-preview/43/', '5af'),
    routes: [
      {
        path: '/test2/pr-preview/43/',
        component: ComponentCreator('/test2/pr-preview/43/', '0b7'),
        routes: [
          {
            path: '/test2/pr-preview/43/',
            component: ComponentCreator('/test2/pr-preview/43/', '1bb'),
            routes: [
              {
                path: '/test2/pr-preview/43/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/43/category/tutorial---basics', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/43/category/tutorial---extras', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/intro',
                component: ComponentCreator('/test2/pr-preview/43/intro', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/congratulations', '2a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/create-a-blog-post', '732'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/create-a-document', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/create-a-page', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/deploy-your-site', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-basics/markdown-features', '245'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-extras/manage-docs-versions', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/43/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/43/tutorial-extras/translate-your-site', '98c'),
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
