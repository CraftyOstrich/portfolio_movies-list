export interface INavItem {
  id: number;
  name: string;
  collapsed?: boolean;
  collapsedChildren?: boolean;
  link: string;
  path?: string;
  children?: INavItem[];
}

export const NavItems = <INavItem[]>
  [
    {
      id: 1,
      name: 'Overview',
      collapsedChildren: true,
      link: '/overview/movie',
      children: [
        {
          id: 1.1,
          name: 'Movie',
          link:'/overview/movie',
        },
        {
          id: 1.2,
          name: 'Serials',
          link: '/overview/tv',
        }
      ]
    },
    {
      id: 2,
        collapsedChildren: false,
        name: 'Movies',
        link: '/movie',
        children: [
        {
          id: 2.1,
          name: 'Popular',
          link: '/movie/popular'
        },
        {
          id: 2.2,
          name: 'Top',
          link: '/movie/top_rated'
        },
        {
          id: 2.3,
          name: 'Soon',
          link: '/movie/upcoming'
        },
        {
          id: 2.4,
          name: 'Now on screen',
          link: '/movie/now_playing'
        }
        ]
     },
      {
      id: 3,
      name: 'Serials',
      collapsedChildren: false,
      link: '/serials',
      children: [
      {
        id: 3.1,
        name: 'Popular',
        link: '/tv/popular'
      },
      {
        id: 3.2,
        name: 'Top',
        link: '/tv/top_rated'
      },
      {
        id: 3.3,
        name: 'On TV',
        link: '/tv/on_the_air'
      },
      {
        id: 3.4,
        name: 'Today on TV',
        link: '/tv/airing_today'
      }
      ]
    },
    {
      id: 4,
      name: 'Actors',
      collapsedChildren: false,
      link: '/person',
      children: [
      {
        id: 4.1,
        name: 'Celebrities',
        link: '/person/popular'
      }
    ]
    },
  ];

