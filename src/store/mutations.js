export default {
  //loading设置
  showLoading(state) {
    state.isLoading = true;
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  //首页列表
  initMovieHomePageList(state,data){
    state.MovieHomePageList=data;
  },
  //首页轮播
  MoviesHuffling(state,data){
    state.MoviesHuffling=data;
  },
  //频道列表
  initMovieChannelList(state,data){
    state.MovieChannelList=data;
  },
  //类型列表
  initMovieChannelTypeList(state,data){
    state.MovieChannelTypeList=data;
  },
  //类型名
  MovieChannelTypeObj(state,data){
    state.MovieChannelTypeObj=data;
  },
  //系列列表
  initMovieSeriesList(state,data){
    state.MovieSeriesList=data;
  },
  //电影详情
  initMovieListDetail(state,data){
    state.MovieListDetail=data;
  },
  //系列视频内容
  initMovieSeriesCont(state,data){
    state.MovieSeriesCont=data;
  },
  //系列视频集数
  MovieSeriesNum(state,data){
    state.MovieSeriesNum=data;
  },
  //系列视频集数内容
  MovieSeriesContEpisode(state,data){
    state.MovieSeriesContEpisode=data;
  }
}
