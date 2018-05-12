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
            <span style="display: inline-block;" @mouseenter="RateOpen()">
              <el-rate
                v-model="MovieListDetail.a"
                disabled
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
            </span>
            <i>{{MovieListDetail.averageScore}}</i>
            <!--评分人数-->
            (已有<span>{{MovieListDetail.count_score}}</span>人评分)
            <!--提交评分-->
            <div class="commitRate" v-show="commitRates" @mouseleave="RateClose()">
              <el-rate v-model="value1"></el-rate>
            </div>
          </div>
          <!--右边-->
          <div class="MovieDataRight">
            <!--评论次数-->
            <span class="el-icon-document"> {{MovieListDetail.count_score}}</span>
            <!--点赞次数-->
            <span class="icon-heart5"> {{MovieListDetail.count_pointGood}}</span>
            <!--分享次数-->
            <span class="el-icon-share"> 1212</span>
          </div>
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
        <!--<div class="MovieLabel">-->
          <!--标签：-->
          <!--<span>励志</span>-->
        <!--</div>-->
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
      <div class="DiscussCont">
        <!--评论头像-->
        <div class="DiscussUser">
          <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
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
          <!--评论回复-->
          <div class="DiscussReply">
            <!--评论回复头像-->
            <div class="ReplyUser">
              <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
            </div>
            <!--回复详情-->
            <div class="ReplyDetail">
              <!--评论回复ID-->
              <div class="ReplyID">不吃面包的笨蛋</div>
              <!--回复信息-->
              <div class="ReplyInformation">我不吃萝卜 也不吃白菜</div>
              <!--回复时间/来源-->
              <div class="ReplyTime">
                <span>4天前</span>来自<span>V电影</span>
                <strong>
                  <a>回复</a>
                  <a>赞</a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--发表评论-->
      <div class="MakeComment">
        <!--内容-->
        <textarea class="DiscussContent"></textarea>
        <!--按钮-->
        <div class="DiscussBtn">
          <!--左边评论图标-->
          <!--<div></div>-->
          <!--右边提交评论-->
          <div class="CommitBtn">
            <span>还可以输入<i>200</i>个字</span>
            <button>发表评论</button>
          </div>
        </div>
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
        commitRates:false,
        playerOptions: {
          // videojs options
          height: '500',
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
          ],
        },
        value5:2.7,
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
      },
      initData(){
        let initOption={
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_vo_ID": this.$route.query.id,//视频编号
        }
        this.$store.dispatch("initMovieListDetail",initOption)
          .then((obj)=>{
              this.playerOptions.sources.push({
              type:'video/'+obj.vf_vo_Extend,
              src:obj.vf_vo_FileURL
            })
            this.playerOptions.poster = obj.vf_vo_ImageURL
          })
      },
      RateOpen(){
        this.commitRates=true;
      },
      RateClose(){
        this.commitRates=false;
      }
    },
    created(){
      this.initData();
    }
  }
</script>

<style lang="less" scoped type="text/less">
  //电影列表详情
  .ListDetail{
    width: 1000px;
    margin: 0px auto;
    //视频详情
    .MovieDetail{
      width: 100%;
      /*height: 1000px;*/
      margin-bottom: 20px;
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
        .MovieData{
          color: #999;
          width: 100%;
          height: 30px;
          line-height: 30px;
          &:after{
            content: '';
            display: block;
            height: 0;
            overflow: hidden;
            clear: both;
          }
          //左边
          .MovieDataLeft{
            float: left;
            margin-left: 20px;
            position: relative;
            i{
              color: rgb(247,168,42);
            }
            //提交评分
            .commitRate{
              position: absolute;
              top: 30px;
              left: 300px;
            }
          }
          //右边
          .MovieDataRight{
            float: right;
            color: #c8c8c8;
            margin-right: 50px;
            span{
              margin: 0px 3px 0px 3px;
              &:nth-of-type(1),&:nth-of-type(3){
                line-height: 20px;
              }
            }
          }
        }
      }
      //视频内容
      .MovieCont{
        height: 100%;
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
        /*.MovieLabel{*/
          /*margin-top: 10px;*/
        /*}*/
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
        margin:20px 0px 50px 50px;
        &:after{
          content: '';
          height: 0;
          overflow: hidden;
          display: block;
          clear: left;
        }
        //评论人头像
        .DiscussUser{
          width: 80px;
          float: left;
          img{
            margin: 10px 0px 0px 30px;
          }
        }
        //评论详情
        .DiscussDetail{
          width: 800px;
          margin-left: 100px;

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
          //评论回复
          .DiscussReply{
            width: 98%;
            height: 150px;
            margin-top: 10px;
            margin-bottom: 10px;
            //评论回复头像
            .ReplyUser{
              width: 80px;
              float: left;
              img{
                margin:10px 0px 0px 10px;
              }
            }
            //回复详情
            .ReplyDetail{
              width: 700px;
              margin-left: 84px;
              //评论回复ID
              .ReplyID{
                font-size: 16px;
                color: #999;
                padding-top: 15px;
              }
              //回复信息
              .ReplyInformation{
                margin-top: 7px;
                color: #444;
                width: 100%;
                height: 83px;
              }
              //回复时间/来源
              .ReplyTime{
                display: flex;
                margin-left: 20px;
                margin-top: 7px;
                margin-bottom: 10px;
                color: #999;
                span{
                  margin-left: 10px;
                }
                strong{
                  margin-left: 400px;
                  display: flex;
                  a{
                    margin-left: 30px;
                  }
                }
              }
            }
          }
        }
      }
      //发表评论
      .MakeComment{
        width: 900px;
        /*height: 200px;*/
        margin:0px 0px 10px 50px;
        //内容
        .DiscussContent{
          width: 100%;
          height: 100px;
          font-size: 16px;
          resize: none;
          border-color: #eee;
          outline: none;
          color: #666;
          padding: 5px 7px 5px 7px;
          &:after{
            content: "";
            height: 0;
            display: block;
            overflow: hidden;
            clear: both;
          }
        }
        //按钮
        .DiscussBtn{
          width: 100%;
          height: 40px;
          line-height: 40px;
          //右边提交按钮
          .CommitBtn{
            float: right;
            width: 300px;
            height: 30px;
            span{
              color: #999;
              i{
                color: #F00;
              }
            }
            button{
              width: 100px;
              height: 30px;
              outline: none;
              border: none;
              color: #fff;
              font-size: 18px;
              margin: 0px 5px 0px 15px;
              background-color: #3498DB;
              &:hover{
                opacity: .8;
              }
            }
          }
        }
      }
    }
  }
</style>
