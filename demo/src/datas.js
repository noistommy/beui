export const treeData = [
  {
    label: 'tree item level 1',
    children: [
      {
        label: 'tree item level 1-1',
        children: [
          {
            label: 'tree item level 1-1-1',
          },
        ],
      },
      {
        label: 'tree item level 1-2',
      },
    ],
  },
  {
    label: 'tree item level 2',
    children: [
      {
        label: 'tree item level 2-1',
        children: [
          {
            label: 'tree item level 2-1-1',
          },
        ],
      },
      {
        label: 'tree item level 2-2',
        children: [
          {
            label: 'tree item level 2-2-1',
          },
          {
            label: 'tree item level 2-2-2',
            children: [
              {
                label: 'tree item level 2-2-2-1',
              },
              {
                label: 'tree item level 2-2-2-2',
              },
              {
                label: 'tree item level 2-2-2-3',
              },
            ],
          },
        ],
      },
    ],
  },
]
export const files = [
  {
    label: 'src',
    children: [
      {
        label: 'assets',
        children: [
          {
            label: 'style.css',
          },
        ],
      },
      {
        label: 'index.tsx',
      },
    ],
  },
  {
    label: 'demo',
    children: [
      {
        label: 'public',
        children: [
          {
            label: 'index.html',
          },
        ],
      },
      {
        label: 'src',
        children: [
          {
            label: 'main.tsx',
          },
          {
            label: 'pages',
            children: [
              {
                label: 'page1.tsx',
              },
              {
                label: 'page2.tsx',
              },
              {
                label: 'page3.tsx',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'README.md',
  },
]
