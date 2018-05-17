export default {
  isLoading: state => state.isLoading,
  MovieHomePageList:state=>state.MovieHomePageList,   //首页视频列表
  MoviesHuffling:state=>state.MoviesHuffling,   //首页轮播
  MovieChannelList:state=>state.MovieChannelList,   //频道列表
  MovieChannelTypeListNum:state=>state.MovieChannelTypeListNum,   //当前类型电影数
  MovieChannelTypeList:state=>state.MovieChannelTypeList,   //类型列表
  MovieChannelTypeObj:state=>state.MovieChannelTypeObj,   //类型名
  MovieSeriesList:state=>state.MovieSeriesList,   //系列列表
  MovieListDetail:state=>state.MovieListDetail,   //电影详情
  MovieListDetailRate:state=>state.MovieListDetailRate,   //电影详情评分
  MovieDetailComment:state=>state.MovieDetailComment,    //评论
  MovieDetailPointGood:state=>state.MovieDetailPointGood,   //电影详情点赞
  MovieListRate:state=>state.MovieListRate,   //查询评分
  MovieSeriesCont:state=>state.MovieSeriesCont,   //系列视频内容
  MovieSeriesNum:state=>state.MovieSeriesNum,   //系列视频集数
  MovieSeriesContEpisode:state=>state.MovieSeriesContEpisode,   //系列视频集数内容
}
