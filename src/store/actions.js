import axios from 'axios'

export default {
  //首页列表
  initMovieHomePageList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/IndexPage',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            //评分处理
            for(let i=0;i < data.data.length;i++){
              data.data[i].a = data.data[i].averageScore/2
            }
            commit('initMovieHomePageList',data.data);
            commit('MoviesHuffling',data.topBigImageList);
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //频道类型列表
  initMovieChannelList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/Channel',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieChannelList',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //类型列表
  initMovieChannelTypeList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/ChannelList',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieChannelTypeList',data.data);
            commit('MovieChannelTypeObj',data.data[0]);
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //系列列表
  initMovieSeriesList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/Series',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieSeriesList',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //电影详情
  initMovieListDetail({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/Detail',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            data.data.a = data.data.averageScore/2;
            commit('initMovieListDetail',data.data);
            relove(data.data);
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //系列视频内容
  initMovieSeriesCont({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/SeriesList',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieSeriesCont',data.data[0]);
            commit('MovieSeriesNum',data.data[0].vf_FilmSeries)
            commit('MovieSeriesContEpisode',data.data[0].vf_FilmSeries[0].vf_Vedio[0])
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
}
