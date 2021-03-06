// import MovieHomePage from '@/components/Movie/MovieHomePage'    //首页
const MovieHomePage = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieHomePage'))); //首页

// import MovieSeries from '@/components/Movie/MovieSeries' //系列
const MovieSeries = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieSeries'))); //系列

// import MovieChannel from '@/components/Movie/MovieChannel' //频道
const MovieChannel = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieChannel'))); //频道

// import MovieChannelList from '@/components/Movie/MovieChannelList' //频道类型列表
const MovieChannelList = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieChannelList'))); //频道类型列表



// import MovieListDetail from '@/components/Movie/MovieListDetail' //视频详情
const MovieListDetail = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieListDetail'))); //视频详情

// import MovieSeriesCont from '@/components/Movie/MovieSeriesCont' //系列视频内容
const MovieSeriesCont = resolve => require.ensure([], () => resolve(require('@/components/Movie/MovieSeriesCont'))); //系列视频内容


// import Comment from '@/components/public/comment' //公共
const Comment = resolve => require.ensure([], () => resolve(require('@/components/public/comment'))); //公共

// import Video from '@/components/Movie/Video'
const Video = resolve => require.ensure([], () => resolve(require('@/components/Movie/Video')));

export default [{
  path: '/comment',
  name: 'Comment',
  component: Comment,
  children: [{
    path: 'movieHomePage',
    name: 'MovieHomePage',
    components: {
      default: Comment,
      Home: MovieHomePage,
    },
  }, {
    path: 'movieChannel',
    name: 'MovieChannel',
    components: {
      default: Comment,
      Home: MovieChannel,
    },
  }, {
    path: 'movieChannelList',
    name: 'MovieChannelList',
    components: {
      default: Comment,
      Home: MovieChannelList,
    },
  }, {
    path: 'movieSeries',
    name: 'MovieSeries',
    components: {
      default: Comment,
      Home: MovieSeries,
    },
  }, {
    path: 'movieListDetail',
    name: 'MovieListDetail',
    components: {
      default: Comment,
      Home: MovieListDetail,
    },
  }, {
    path: 'movieSeriesCont',
    name: 'MovieSeriesCont',
    components: {
      default: Comment,
      Home: MovieSeriesCont,
    },
  }, ]
}, {
  path: '/',
  hidden: true,
  redirect: {
    name: 'MovieHomePage'
  }
}, {
  path: '/video',
  name: 'Video',
  component: Video
}, {
  path: '*',
  hidden: true,
  redirect: {
    name: 'MovieHomePage'
  }
}, ]