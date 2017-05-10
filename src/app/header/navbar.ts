export interface INavItem {
  id: number;
  name: string;
  collapsed?: boolean;
  collapsedChildren?: boolean;
  children?: INavItem[];
}

export const NavItems = <INavItem[]>
  [
    {
      id: 1,
      name: 'Overview',
      collapsed: false,
      collapsedChildren: true,
      children: [
        {
          id: 1.1,
          name: 'Movie'
        },
        {
          id: 1.2,
          name: 'Serials'
        }
      ]
    },
    {
      id: 2,
        collapsed: false,
        collapsedChildren: false,
        name: 'Movies',
        children: [
        {
          id: 2.1,
          name: 'Popular'
        },
        {
          id: 2.2,
          name: 'Top'
        },
        {
          id: 2.3,
          name: 'Soon'
        },
        {
          id: 2.4,
          name: 'Now on screen'
        }
        ]
     },
      {
      id: 3,
      name: 'Serials',
      collapsed: false,
      collapsedChildren: false,
      children: [
      {
        id: 3.1,
        name: 'Popular'
      },
      {
        id: 3.2,
        name: 'Top'
      },
      {
        id: 3.3,
        name: 'On TV'
      },
      {
        id: 3.4,
        name: 'Today on TV'
      }
      ]
    },
    {
      id: 4,
      name: 'Actors',
      collapsed: false,
      collapsedChildren: false,
      children: [
      {
        id: 4.1,
        name: 'Celebrities'
      }
    ]
    },
  ];

