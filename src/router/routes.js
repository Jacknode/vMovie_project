import MovieHomePage from '@/components/Movie/MovieHomePage'
import MovieSeries from '@/components/Movie/MovieSeries'
import MovieChannel from '@/components/Movie/MovieChannel'

import Comment from '@/components/public/comment'


export default [{
	path: '/movieHomePage',
	name: 'MovieHomePage',
	component: MovieHomePage
},
  {
    path: '/movieSeries',
    name: 'MovieSeries',
    component: MovieSeries
  },
  {
    path: '/movieChannel',
    name: 'MovieChannel',
    component: MovieChannel
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment,
  }
]
