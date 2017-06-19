export interface INavItem {
  id: number;
  name: string;
  collapsed?: boolean;
  collapsedChildren?: boolean;
  link: string;
  path: string;
  children?: INavItem[];
}

export const NavItems = <INavItem[]>
  [
    {
      id: 1,
      name: 'Overview',
      //collapsed: true,
      collapsedChildren: true,
      link: '/overview',
      path: '',
      children: [
        {
          id: 1.1,
          name: 'Movie',
          link:'/overview/movie',
          path: ''
        },
        {
          id: 1.2,
          name: 'Serials',
          link: '/overview/serials',
          path: ''
        }
      ]
    },
    {
      id: 2,
        //collapsed: false,
        collapsedChildren: false,
        name: 'Movies',
        link: '/movie',
        //path: '',
        children: [
        {
          id: 2.1,
          name: 'Popular',
          link: '/movie/popular',
          //path: '/movie/popular'
        },
        {
          id: 2.2,
          name: 'Top',
          link: '/movie/top_rated',
          //path: '/movie/top_rated'
        },
        {
          id: 2.3,
          name: 'Soon',
          link: '/movie/upcoming',
          //path: '/movie/upcoming'
        },
        {
          id: 2.4,
          name: 'Now on screen',
          link: '/movie/now_playing',
          //path: '/movie/now_playing'
        }
        ]
     },
      {
      id: 3,
      name: 'Serials',
      //collapsed: false,
      collapsedChildren: false,
      link: '/serials',
        path: '',
      children: [
      {
        id: 3.1,
        name: 'Popular',
        link: '/tv/popular',
        //path: ''
      },
      {
        id: 3.2,
        name: 'Top',
        link: '/tv/top_rated',
        //path: ''
      },
      {
        id: 3.3,
        name: 'On TV',
        link: '/tv/on_the_air',
        path: ''
      },
      {
        id: 3.4,
        name: 'Today on TV',
        link: '/tv/airing_today',
        //path: ''
      }
      ]
    },
    {
      id: 4,
      name: 'Actors',
      //collapsed: false,
      collapsedChildren: false,
      link: '/actors',
      path: '',
      children: [
      {
        id: 4.1,
        name: 'Celebrities',
        link: '/actors/celebrities',
        path: ''
      }
    ]
    },
  ];

