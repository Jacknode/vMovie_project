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
          // console.log(data);
          if( Number(data.resultcode) == 200 ){
            commit('initMovieHomePageList',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //频道列表
  initMovieChannelList({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/VWebPage/Channel',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data = data.data;
          // console.log(data);
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
          console.log(data);
          if( Number(data.resultcode) == 200 ){
            commit('initMovieChannelTypeList',data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  }
}
