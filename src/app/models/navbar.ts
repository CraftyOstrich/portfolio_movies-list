export interface INavItem {
  id: number;
  name: string;
  collapsed?: boolean;
  collapsedChildren?: boolean;
  link: string;
  type?: string;
  children?: INavItem[];
}

export const NavItems = <INavItem[]>
  [
    {
      id: 1,
      name: 'Discover',
      collapsedChildren: true,
      link: '/discover',
      type: 'movie',
      children: [
        {
          id: 1.1,
          name: 'Movie',
          link: '/discover',
          type: 'movie'
        },
        {
          id: 1.2,
          name: 'Tv',
          link: '/discover',
          type: 'tv'
        }
      ]
    },
    {
      id: 2,
      collapsedChildren: false,
      name: 'Movies',
      link: '/movie',
      type: 'popular',
      children: [
        {
          id: 2.1,
          name: 'Popular',
          link: '/movie',
          type: 'popular'
        },
        {
          id: 2.2,
          name: 'Top',
          link: '/movie',
          type: 'top_rated'
        },
        {
          id: 2.3,
          name: 'Soon',
          link: '/movie',
          type: 'upcoming'
        },
        {
          id: 2.4,
          name: 'Now on screen',
          link: '/movie',
          type: 'now_playing',
        }
      ]
    },
    {
      id: 3,
      name: 'Tvs',
      collapsedChildren: false,
      link: '/tv',
      type: 'popular',
      children: [
        {
          id: 3.1,
          name: 'Popular',
          link: '/tv',
          type: 'popular'
        },
        {
          id: 3.2,
          name: 'Top',
          link: '/tv',
          type: 'top_rated'
        },
        {
          id: 3.3,
          name: 'On TV',
          link: '/tv',
          type: 'on_the_air'
        },
        {
          id: 3.4,
          name: 'Today on TV',
          link: '/tv',
          type: 'airing_today'
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

