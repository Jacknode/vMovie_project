<template>
  <!--系列中的视频的内容-->
  <div class="SeriesCont">
    <!--视频部分-->
    <div class="MoviePlay">
      <video-player  class="vjs-custom-skin"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true"
                     customEventName="customstatechangedeventname"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
                     @ended="onPlayerEnded($event)"
                     @waiting="onPlayerWaiting($event)"
                     @ready="playerReadied"
      >
      </video-player>
    </div>
    <!--视频其他参数-->
    <div class="MovieOtherInformation">
      <!--标题部分-->
      <div class="MovieTitle">
        <!--标题-->
        <div class="tLeft">
          {{MovieSeriesContEpisode.vf_vo_Title}}
          <span>自制</span>
        </div>
        <!--分享图标-->
        <div class="tRight"></div>
      </div>
      <!--更新-->
      <div class="MovieUpdata">
        <strong>{{MovieSeriesCont.vf_ss_UpdateTime}}</strong>
      </div>
      <!--集数详情-->
      <div class="EpisodeDetail">
        <a v-for="item,index in MovieSeriesNum.length" @click="toReload(index+1)" :class="{active:index==n}">{{index+1}}</a>
      </div>
    </div>
    <!--评论-->
    <div class="MovieDiscuss">
      <!--评论细节-->
      <div class="DiscussDes">
        影片点评
        <span>已有0条点评</span>
      </div>
      <!--评论区-->
      <div class="DiscussCont">
        <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
        <!--内容-->
        <textarea type="text" class="Describe" placeholder="很不错"></textarea>
        <!--按钮-->
        <div class="DiscussBtn">
          还可以输入<span>2000</span>个字
          <button>发表评论</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: Object.assign({
      player() {
        return this.$refs.videoPlayer.player
      }
    },mapGetters([
      'MovieSeriesCont',      //视频系列内容
      'MovieSeriesNum',       //视频内容集数
      'MovieSeriesContEpisode'    //视频集数内容
    ])),
    data(){
      return{
        playerOptions: {
          // videojs options
          height: '500',
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
          ],
        },
      }
    },
    methods:{
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      //初始化
      initData(num){
        let initOption={
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_ss_ID": this.$route.query.id,//系列编号
          "vf_fs_Level": num,//当前集或最新集
        }
        this.$store.dispatch('initMovieSeriesCont',initOption)
          .then(()=>{
            this.playerOptions.sources.push({
              type:'video/'+this.MovieSeriesContEpisode.vf_vo_Extend,
              src:this.MovieSeriesContEpisode.vf_vo_FileURL
            })
            this.playerOptions.poster = this.MovieSeriesContEpisode.vf_vo_ImageURL
          })
      },
      toReload(index){
        sessionStorage.setItem('index',index)
        window.location.reload()
      }
    },
    created(){
      let index = sessionStorage.getItem('index');
      if(index){
        this.n = index-1;
        this.initData(index);
      }else{
        this.initData();
      }

    }
  }
</script>

<style lang="less" scoped type="text/less">
  .SeriesCont{
    width: 1000px;
    margin: 20px auto 0px;
    //视频部分
    .MoviePlay{
      width: 100%;
      height: 600px;
    }
    //视频其他参数
    .MovieOtherInformation{
      width: 100%;
      min-height: 200px;
      background-color: #eee;
      margin-top: 30px;
      //标题
      .MovieTitle{
        width: 680px;
        height: 50px;
        margin: 0px 0px 0px 120px;
        line-height: 50px;
        .tLeft{
          font-family: "Microsoft YaHei";
          font-size: 20px;
          font-weight: bold;
          span{
            width: 40px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            display: inline-block;
            font-weight: normal;
            color: #fff;
            font-size: 14px;
            background-color: #ff7b6e;
          }
        }
      }
      //更新
      .MovieUpdata{
        width: 680px;
        height: 50px;
        position: relative;
        line-height: 50px;
        margin: 0px 0px 0px 120px;
        strong{
          color: #999;
          position: absolute;
          right: 0px;
        }
      }
      //集数详情
      .EpisodeDetail{
        width: 680px;
        margin: 20px 0px 0px 120px;
        a{
          width: 28px;
          height: 28px;
          background-color: #fff;
          text-align: center;
          line-height: 28px;
          margin: 15px 5px 0px 5px;
          box-shadow: 1px 2px #c8c8c8;
          display: inline-block;
        }
      }
    }
    //评论
    .MovieDiscuss{
      width: 100%;
      height: 270px;
      margin-top: 10px;
      border: 1px solid rgb(241,241,241);
      //评论细节
      .DiscussDes{
        width: 880px;
        height: 45px;
        margin-left: 60px;
        line-height: 45px;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        span{
          font-size: 16px;
          color: #c8c8c8;
          margin-left: 20px;
        }
      }
      //评论区
      .DiscussCont{
        width: 880px;
        height: 200px;
        margin: 5px 0px 0px 60px;
        position: relative;
        &:after{
          content: '';
          height: 0;
          display: block;
          overflow: hidden;
          clear: right;
        }
        img{
          margin: 20px 0px 0px 25px;
        }
        //内容
        .Describe{
          width: 780px;
          height: 150px;
          resize: none;
          float: right;
          font-size: 16px;
          text-indent: 1em;
          padding-top: 5px;
          border: 1px solid #eee;
        }
        //按钮
        .DiscussBtn{
          width: 780px;
          height: 50px;
          line-height: 50px;
          position: absolute;
          bottom: 0px;
          right: 0px;
          color: #999;
          font-size: 16px;
          padding-left: 500px;
          span{
            color: #f00;
          }
          button{
            outline: none;
            border: none;
            width: 90px;
            height: 30px;
            color: #fff;
            font-size: 16px;
            border-radius:2px;
            margin-left: 10px;
            background-color: #3498DB;
            &:hover{
              opacity: .8;
            }
          }
        }
      }
    }
  }
</style>
