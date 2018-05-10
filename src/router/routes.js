import MovieHomePage from '@/components/Movie/MovieHomePage'
import MovieSeries from '@/components/Movie/MovieSeries'
import MovieChannel from '@/components/Movie/MovieChannel'
import MovieChannelList from '@/components/Movie/MovieChannelList'

import MovieListDetail from '@/components/Movie/MovieListDetail'

import Comment from '@/components/public/comment'
import Video from '@/components/Movie/Video'

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
        path: 'movieChannelList',
        name: 'MovieChannelList',
        components: {
          default: Comment,
          Home: MovieChannelList,
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
      {
        path: 'movieListDetail',
        name: 'MovieListDetail',
        components: {
          default: Comment,
          Home: MovieListDetail,
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
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'MovieHomePage'}
  },
]
