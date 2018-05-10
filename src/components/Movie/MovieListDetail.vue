<template>
  <!--视频详情-->
  <div class="ListDetail">
    <!--视频详情区-->
    <div class="MovieDetail">
      <!--顶部->视频标题-->
      <div class="MovieTop">
        <div class="Title">{{MovieListDetail.vf_vo_Title}}</div>
        <!--视频资料-->
        <div class="MovieData">
          <!--左边-->
          <div class="MovieDataLeft">
            <span>
            <!--作者-->
            {{MovieListDetail.vf_vo_AuthorName}}
          </span>
            发布于
            <!--时间-->
            <span>{{MovieListDetail.vf_vo_CreateTime}}</span>
            频道:
            <!--视频类型-->
            <span>{{MovieListDetail.vf_te_Name}}</span>
            <!--评分-->
            <span style="display: inline-block;">
              <el-rate
                v-model="MovieListDetail.averageScore"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
            </span>
            <!--评分人数-->
            (已有<span>{{MovieListDetail.count_score}}</span>人评分)
          </div>
          <!--右边-->
          <div class="MovieDataRight"></div>
        </div>
      </div>
      <!--视频详情-->
      <div class="MovieCont">
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
        <!--简介->内容概要-->
        <div class="ContentAbstract">{{MovieListDetail.vf_vo_Remark}}</div>
        <!--版权-->
        <div class="CopyRight">本文文字内容归本站版权所有，转载请注明来自V电影</div>
        <!--标签-->
        <div class="MovieLabel">
          标签：
          <span>励志</span>
        </div>
      </div>
    </div>
    <!--评论区-->
    <div class="MovieDiscuss">
      <!--评论顶部-->
      <div class="DiscussTop">
        <strong>影片点评</strong>
        <span>已有67条点评</span>
        <button>快速点评</button>
      </div>
      <!--评论-->
      <div class="DiscussCont" v-for="item in Boxs">
        <!--评论头像-->
        <div class="DiscussUser">
          <!--<img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">-->
        </div>
        <!--评论详情-->
        <div class="DiscussDetail">
          <!--评论id-->
          <div class="DiscussID">萝卜白菜</div>
          <!--评论信息-->
          <div class="DiscussInformation">打死不爱</div>
          <!--评论时间/来源-->
          <div class="DiscussTime">
            <span>4天前</span>来自<span>V电影</span>
            <strong>
              <a>1条评论</a>
              <a>回复</a>
            </strong>
          </div>
        </div>





        <!--评论回复-->
        <!--<div class="DiscussReply" v-for="item in Replys">-->
        <!--&lt;!&ndash;评论头像&ndash;&gt;-->
        <!--<div class="ReplyUser">-->
        <!--<img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">-->
        <!--</div>-->
        <!--&lt;!&ndash;评论详情&ndash;&gt;-->
        <!--<div class="ReplyDetail">-->
        <!--&lt;!&ndash;评论id&ndash;&gt;-->
        <!--<div class="ReplyID">萝卜白菜</div>-->
        <!--&lt;!&ndash;评论信息&ndash;&gt;-->
        <!--<div class="ReplyInformation">打死不爱</div>-->
        <!--&lt;!&ndash;评论时间/来源&ndash;&gt;-->
        <!--<div class="ReplyTime">-->
        <!--<span>4天前</span>来自<span>V电影</span>-->
        <!--<strong>-->
        <!--<a>回复</a>-->
        <!--<a>赞</a>-->
        <!--</strong>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/custom-theme.css'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        playerOptions: {
          // videojs options
          height: '500',
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://vjs.zencdn.net/v/oceans.mp4",
          }],
          poster: "/static/images/author.jpg",
        },
        value5:2.7,
        Boxs:["",],
        Replys:["",""]
      }
    },
    computed: Object.assign({
      player() {
        return this.$refs.videoPlayer.player
      }
    },mapGetters([
      'MovieListDetail'
    ])),
    methods: {
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
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  //电影列表详情
  .ListDetail{
    width: 1000px;
    height: 2200px;
    margin: 0px auto;
    //视频详情
    .MovieDetail{
      width: 100%;
      height: 1000px;
      //视频顶部
      .MovieTop{
        width: 100%;
        height: 130px;
        // 标题
        .Title{
          font-size: 24px;
          font-family: "Microsoft YaHei";
          width: 100%;
          height: 80px;
          line-height: 80px;
        }
        //视频资料
        .MovieData{}
      }
      //视频内容
      .MovieCont{
        //视频
        video{
          width: 700px;
          height: 467px;
          margin-left: 150px;
        }
        //内容概要
        .ContentAbstract{
          width: 1000px;
          line-height: 30px;
          font-size: 16px;
          font-family: 'Microsoft YaHei';
          text-indent: 2em;
          margin-top: 10px;
        }
        //版权
        .CopyRight{
          width: 900px;
          margin-left: 50px;
          margin-top: 20px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #c8c8c8;
          font-size: 16px;
          background-color: #eee;
        }
        //标签
        .MovieLabel{
          margin-top: 10px;
        }
      }
    }
    //评论区
    .MovieDiscuss{
      width: 100%;
      border: 1px solid #eee;
      //评论顶部
      .DiscussTop{
        height: 50px;
        width: 90%;
        line-height: 50px;
        margin-left: 50px;
        border-bottom: 1px solid #eee;
        strong{
          font-family: "Microsoft YaHei";
          font-size: 18px;
        }
        span{
          font-size: 16px;
          font-family: "Microsoft YaHei";
          color: #999;
          margin-left: 20px;
        }
        button{
          width: 100px;
          height: 30px;
          outline: none;
          border: none;
          color: #fff;
          font-family: "Microsoft YaHei";
          font-size: 16px;
          background-color: #3498db;
          margin-left: 530px;
          &:hover{
            opacity: .8;
          }
        }
      }
      //评论
      .DiscussCont{
        width: 90%;
        height: 150px;
        position: relative;
        z-index: 100;
        margin:20px 0px 150px 50px;
        //评论人头像
        .DiscussUser{
          height: 100%;
          width: 80px;
          img{
            margin: 10px 0px 0px 30px;
          }
        }
        //评论详情
        .DiscussDetail{
          width: 800px;
          height: 100%;
          position: absolute;
          z-index: 100;
          right: 0px;
          top: 0px;
          margin-left: 20px;
          //评论ID
          .DiscussID{
            font-family: "Microsoft YaHei";
            font-size: 16px;
            margin-top: 15px;
            color: #999;
          }
          //评论信息
          .DiscussInformation{
            height: 83px;
            width: 100%;
            color: #444;
            margin-top: 7px;
            font-size: 14px;
          }
          //评论时间、来源
          .DiscussTime{
            display: flex;
            margin-left: 20px;
            margin-top: 7px;
            color: #999;
            span{
              margin-left: 10px;
            }
            strong{
              margin-left: 470px;
              display: flex;
              a{
                margin-left: 20px;
              }
            }
          }
        }
        //评论回复
        /*.DiscussReply{*/
        /*width: 700px;*/
        /*height: 150px;*/
        /*position: absolute;*/
        /*right: 0px;*/
        /*!*top: 150px;*!*/
        /*background-color: #fec;*/
        /*}*/
      }
    }
  }
</style>
