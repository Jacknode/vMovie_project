import MovieHomePage from '@/components/Movie/MovieHomePage'
import MovieSeries from '@/components/Movie/MovieSeries'
import MovieChannel from '@/components/Movie/MovieChannel'

import Comment from '@/components/public/comment'


export default [
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
    children: [
      {
        path: 'movieHomePage',
        name: 'MovieHomePage',
        components: {
          default: Comment,
          Home: MovieHomePage,
        },
      },
      {
        path: 'movieChannel',
        name: 'MovieChannel',
        components: {
          default: Comment,
          Home: MovieChannel,
        },
      },
      {
        path: 'movieSeries',
        name: 'MovieSeries',
        components: {
          default: Comment,
          Home: MovieSeries,
        },
      },
    ]
  },
  {
    path: '/',
    hidden: true,
    redirect: {name: 'MovieHomePage'}
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'MovieHomePage'}
  },
]
