
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
              data.data[i].a = data.data[i].average_score/2
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
            if( data.data.length){
              for(let i=0;i < data.data.length;i++){
                data.data[i].a = data.data[i].average_score/2
              }
              commit('initMovieChannelTypeListNum',data);
              commit('initMovieChannelTypeList',data.data);
              commit('initMovieChannelTypeObj',data.data[0]);
            }
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
            commit('initMovieListDetail',data.data);
            relove(data.data);
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加评论
  AddMovieDetailComment(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Comment/InsertV',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询评论
  initMovieDetailComment({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Comment/SelectV',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieDetailComment',data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除评论
  DeteleMovieDetailComment(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Comment/DeleteCommentV',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加修改评分
  AddOrUpdateMovieListDetailRate(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Score/AddOrUpdate',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            relove(data.resultcontent);
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询评分
  initMovieListRate({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Score/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            data.a = data.average_Score/2;
            commit('initMovieListRate',data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //查询点赞
  initMovieDetailPointGood({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/PointGood/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieDetailPointGood',data);
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加或取消点赞
  AddDeteleMovieDetailPointGood(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/PointGood/AddOrDelete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            relove(data.resultcontent);
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //系列视频内容
  initMovieSeriesContList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/SeriesList',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieSeriesContList',data);
            commit('MovieSeriesContDetail',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //系列视频集数Data
  initMovieSeriesNumHover({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/SeriesListMousemovein',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          if( Number(data.resultcode) == 200 ){
            commit('initMovieSeriesNumHover',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
}
