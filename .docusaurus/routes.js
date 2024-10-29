import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test2/pr-preview/39/markdown-page',
    component: ComponentCreator('/test2/pr-preview/39/markdown-page', '10e'),
    exact: true
  },
  {
    path: '/test2/pr-preview/39/',
    component: ComponentCreator('/test2/pr-preview/39/', '2dc'),
    exact: true
  },
  {
    path: '/test2/pr-preview/39/',
    component: ComponentCreator('/test2/pr-preview/39/', 'fe6'),
    routes: [
      {
        path: '/test2/pr-preview/39/',
        component: ComponentCreator('/test2/pr-preview/39/', '46e'),
        routes: [
          {
            path: '/test2/pr-preview/39/',
            component: ComponentCreator('/test2/pr-preview/39/', '191'),
            routes: [
              {
                path: '/test2/pr-preview/39/category/tutorial---basics',
                component: ComponentCreator('/test2/pr-preview/39/category/tutorial---basics', '9f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/category/tutorial---extras',
                component: ComponentCreator('/test2/pr-preview/39/category/tutorial---extras', '185'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/intro',
                component: ComponentCreator('/test2/pr-preview/39/intro', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/congratulations',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/congratulations', 'ccf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/create-a-blog-post', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/create-a-document',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/create-a-document', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/create-a-page',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/create-a-page', 'f33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/deploy-your-site', '747'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-basics/markdown-features',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-basics/markdown-features', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-extras/manage-docs-versions', '337'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/test2/pr-preview/39/tutorial-extras/translate-your-site',
                component: ComponentCreator('/test2/pr-preview/39/tutorial-extras/translate-your-site', 'f37'),
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
