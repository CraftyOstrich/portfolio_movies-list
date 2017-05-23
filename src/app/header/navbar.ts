export interface INavItem {
  id: number;
  name: string;
  collapsed?: boolean;
  collapsedChildren?: boolean;
  link: string;
  children?: INavItem[];
}

export const NavItems = <INavItem[]>
  [
    {
      id: 1,
      name: 'Overview',
      collapsed: false,
      collapsedChildren: true,
      link: '/overview',
      children: [
        {
          id: 1.1,
          name: 'Movie',
          link:'/movie'
        },
        {
          id: 1.2,
          name: 'Serials',
          link: '/serials'
        }
      ]
    },
    {
      id: 2,
        collapsed: false,
        collapsedChildren: false,
        name: 'Movies',
        link: '/movies',
        children: [
        {
          id: 2.1,
          name: 'Popular',
          link: '/popular'
        },
        {
          id: 2.2,
          name: 'Top',
          link: '/top'
        },
        {
          id: 2.3,
          name: 'Soon',
          link: '/soon'
        },
        {
          id: 2.4,
          name: 'Now on screen',
          link: '/now on screen'
        }
        ]
     },
      {
      id: 3,
      name: 'Serials',
      collapsed: false,
      collapsedChildren: false,
      link: '/serials',
      children: [
      {
        id: 3.1,
        name: 'Popular',
        link: '/popular'
      },
      {
        id: 3.2,
        name: 'Top',
        link: '/top'
      },
      {
        id: 3.3,
        name: 'On TV',
        link: '/on TV'
      },
      {
        id: 3.4,
        name: 'Today on TV',
        link: '/today'
      }
      ]
    },
    {
      id: 4,
      name: 'Actors',
      collapsed: false,
      collapsedChildren: false,
      link: '/actors',
      children: [
      {
        id: 4.1,
        name: 'Celebrities',
        link: '/celebrities'
      }
    ]
    },
  ];

