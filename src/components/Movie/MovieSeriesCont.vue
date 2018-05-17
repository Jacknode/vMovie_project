<template>
  <!--系列中的视频的内容--集数标题 没有和集数对应?-->
  <div class="SeriesCont">
    <!--视频部分-->
    <div class="MoviePlay">
      <video-player class="vjs-custom-skin"
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
          <!--<span>自制</span>-->
        </div>
        <!--分享图标-->
        <div class="tRight"></div>
      </div>
      <!--更新-->
      <div class="MovieUpdata">
        <strong>{{MovieSeriesCont.vf_ss_UpdateTime}}</strong>
      </div>
      <!--集数详情-->
      <div class="EpisodeDetail" v-for="item,index in MovieSeriesNum" @click="toReload(item.vf_fs_Level,item)">
        <el-popover
          placement="right"
          width="320"
          trigger="hover"
          :content="MovieSeriesContEpisode.vf_vo_Remark">
          <!--<span slot="reference" :class="{active:item.vf_fs_Level==n}">{{item.vf_fs_Level}}</span>-->
          <el-button slot="reference" :class="{active:item.vf_fs_Level==n}" size="small">{{item.vf_fs_Level}}</el-button>
        </el-popover>
      </div>
    </div>
    <!--评论-->
    <!--评论区-->
    <div class="MovieDiscuss">
      <!--评论顶部-->
      <div class="DiscussTop">
        <strong>影片点评</strong>
        <span>已有{{MovieDetailComment.totalRows}}条点评</span>
        <button>快速点评</button>
      </div>
      <!--评论-->
      <div class="DiscussCont" v-for="item in MovieDetailComment.data">
        <!--评论头像-->
        <div class="DiscussUser">
          <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
        </div>
        <!--评论详情-->
        <div class="DiscussDetail">
          <!--评论id-->
          <div class="DiscussID">{{item.ts_ct_userName}}</div>
          <!--评论信息-->
          <div class="DiscussInformation">{{item.ts_ct_Content}}</div>
          <!--评论时间/来源-->
          <div class="DiscussTime">
            <span>{{item.ts_ct_CreateTime}}</span>来自<span>V电影</span>
            <strong>
              <a @click="detele(item)">删除</a>
              <a>评论</a>
              <a>回复</a>
            </strong>
          </div>
          <!--评论回复-->
          <div class="DiscussReply" v-show="0">
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
      <!--评论发表-->
      <div class="DiscussCommit">
        <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
        <!--内容-->
        <textarea type="text" class="Describe" v-model="content"></textarea>
        <!--按钮-->
        <div class="DiscussBtn">
          还可以输入<span>200</span>个字
          <button @click="addComt()">发表评论</button>
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
    }, mapGetters([
      'MovieSeriesCont',      //视频系列内容
      'MovieSeriesNum',       //视频内容集数
      'MovieSeriesContEpisode',    //视频集数内容
      'MovieDetailComment'    //评论
    ])),
    data(){
      return {
        n: 0,
        content: '',
        playerOptions: {
          // videojs options
          height: '500',
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [],
        },
      }
    },
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
        // console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerEnded(){},
      onPlayerWaiting(){},
      //初始化
      initData(num){
        let initOption = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_ss_ID": this.$route.query.id,//系列编号
          "vf_fs_Level": num ? num : '',//当前集或最新集
        }
        this.$store.dispatch('initMovieSeriesCont', initOption)
        .then(() => {
          this.playerOptions.sources.push({
            type: 'video/' + this.MovieSeriesContEpisode.vf_vo_Extend,
            src: this.MovieSeriesContEpisode.vf_vo_FileURL
          })
          this.playerOptions.poster = this.MovieSeriesContEpisode.vf_vo_ImageURL
        })
      },
      toReload(index, item){
        // sessionStorage.setItem('index',index)
        // window.location.reload()
        //问题待处理，点击集数没有jump到对应的集数数据
        // console.log(11,this.MovieSeriesCont.vf_fs_Level)
        this.$router.push({name:'MovieSeriesCont',query:{id:item.vf_fs_SeriesID,Level:index}});
        setTimeout(()=>{
          window.location.reload()
        },50)
//        console.log(1231, item.vf_Vedio[0].vf_vo_Title)
      },
      //查询评论
      initComment(){
        let initCommentOption = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",  //操作员编码
          "operateUserName": "",  //操作员名称
          "pcName": "",  //机器码
          "ts_ct_UserInfoID": "1",  //用户信息编码
          "ts_ct_GoodID": this.$route.query.id,    //视频编号
          "ts_ct_IsDelete": 0,  //是否有效
          "page": 1,  //页码
          "rows": 10,  //条数
        }
        this.$store.dispatch('initMovieDetailComment', initCommentOption)
      },
      //添加评论
      addComment() {
        let addCommentOption = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",  //操作员编码
          "operateUserName": "",  //操作员名称
          "pcName": "",  //机器码
          "data": {
            "ts_ct_UserInfoID": 1,  //用户信息编码
            "ts_ct_GoodID": this.$route.query.id,   //视频编号
            "ts_ct_Content": this.content,//内容
          }
        }
        this.$store.dispatch('AddMovieDetailComment', addCommentOption)
        .then(() => {
          setTimeout(() => {
            this.initComment();
          }, 30)
        })
      },
      //添加评论
      addComt(){
        this.addComment();
        this.content = "";
      },
      //删除评论
      deteleComment(id){
        let deteleComOption = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",  //操作员编码
          "operateUserName": "",  //操作员名称
          "pcName": "",  //机器码
          "data": {
            "ts_ct_UserInfoID": "1",      //用户信息编码
            "ts_ct_ID": id ? id : '',          //视频评论编号
          }
        }
        this.$store.dispatch('DeteleMovieDetailComment', deteleComOption)
        .then(() => {
          this.initComment();
        })
      },
      //删除评论
      detele(item){
        this.deteleComment(item.ts_ct_ID);
      },
    },
    created(){
      let index = sessionStorage.getItem('index');
      let Level = this.$route.query.Level;
      if (Level) {
        this.n = Level;
        this.initData(Level);
      }else {
        this.initData();
        this.initComment();
      }
//      if (index) {
//        this.n = index - 1;
//        this.initData(index);
//      } else {
//        this.initData();
//        this.initComment();
//      }

    }
  }
</script>

<style lang="less" scoped type="text/less">
  .SeriesCont {
    width: 1000px;
    margin: 20px auto 0px;
    //视频部分
    .MoviePlay {
      width: 100%;
      height: 600px;
    }
    //视频其他参数
    .MovieOtherInformation {
      width: 100%;
      min-height: 200px;
      background-color: #eee;
      margin-top: 30px;
      //标题
      .MovieTitle {
        width: 680px;
        height: 50px;
        margin: 0px 0px 0px 120px;
        line-height: 50px;
        .tLeft {
          font-family: "Microsoft YaHei";
          font-size: 20px;
          font-weight: bold;
          span {
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
      .MovieUpdata {
        width: 680px;
        height: 50px;
        position: relative;
        line-height: 50px;
        margin: 0px 0px 0px 120px;
        strong {
          color: #999;
          position: absolute;
          right: 0px;
        }
      }
      //集数详情
      .EpisodeDetail {
        width: 680px;
        margin: 20px 0px 0px 120px;
        button {
          float: left;
          background-color: #fff;
          text-align: center;
          margin: 15px 5px 0px 5px;
          /*box-shadow: 1px 2px #c8c8c8;*/
          &:after {
            content: '';
            height: 0;
            display: block;
            overflow: hidden;
            clear: left;
          }
        }
        .active{
          background: blue;
          color: #fff;
          box-shadow: none;
        }
      }
    }
    //评论区
    .MovieDiscuss {
      width: 100%;
      border: 1px solid #eee;
      //评论顶部
      .DiscussTop {
        height: 50px;
        width: 90%;
        line-height: 50px;
        margin-left: 50px;
        border-bottom: 1px solid #eee;
        strong {
          font-family: "Microsoft YaHei";
          font-size: 18px;
        }
        span {
          font-size: 16px;
          font-family: "Microsoft YaHei";
          color: #999;
          margin-left: 20px;
        }
        button {
          width: 100px;
          height: 30px;
          outline: none;
          border: none;
          color: #fff;
          font-family: "Microsoft YaHei";
          font-size: 16px;
          background-color: #3498db;
          margin-left: 530px;
          &:hover {
            opacity: .8;
          }
        }
      }
      //评论
      .DiscussCont {
        width: 90%;
        margin: 20px 0px 50px 50px;
        &:after {
          content: '';
          height: 0;
          overflow: hidden;
          display: block;
          clear: left;
        }
        //评论人头像
        .DiscussUser {
          width: 80px;
          float: left;
          img {
            margin: 10px 0px 0px 30px;
          }
        }
        //评论详情
        .DiscussDetail {
          width: 800px;
          margin-left: 100px;

          //评论ID
          .DiscussID {
            font-family: "Microsoft YaHei";
            font-size: 16px;
            margin-top: 15px;
            color: #999;
          }
          //评论信息
          .DiscussInformation {
            height: 83px;
            width: 100%;
            color: #444;
            margin-top: 7px;
            font-size: 14px;
          }
          //评论时间、来源
          .DiscussTime {
            display: flex;
            margin-left: 20px;
            margin-top: 7px;
            color: #999;
            span {
              margin-left: 10px;
            }
            strong {
              margin-left: 470px;
              display: flex;
              a {
                margin-left: 20px;
                cursor: default;
                color: #666;
                &:hover {
                  opacity: .7;
                }
              }
            }
          }
          //评论回复
          .DiscussReply {
            width: 98%;
            height: 150px;
            margin-top: 10px;
            margin-bottom: 10px;
            //评论回复头像
            .ReplyUser {
              width: 80px;
              float: left;
              img {
                margin: 10px 0px 0px 10px;
              }
            }
            //回复详情
            .ReplyDetail {
              width: 700px;
              margin-left: 84px;
              //评论回复ID
              .ReplyID {
                font-size: 16px;
                color: #999;
                padding-top: 15px;
              }
              //回复信息
              .ReplyInformation {
                margin-top: 7px;
                color: #444;
                width: 100%;
                height: 83px;
              }
              //回复时间/来源
              .ReplyTime {
                display: flex;
                margin-left: 20px;
                margin-top: 7px;
                margin-bottom: 10px;
                color: #999;
                span {
                  margin-left: 10px;
                }
                strong {
                  margin-left: 400px;
                  display: flex;
                  a {
                    margin-left: 30px;
                  }
                }
              }
            }
          }
        }
      }
      //评论发表
      .DiscussCommit {
        width: 880px;
        height: 200px;
        margin: 5px 0px 0px 60px;
        position: relative;
        &:after {
          content: '';
          height: 0;
          display: block;
          overflow: hidden;
          clear: right;
        }
        img {
          margin: 20px 0px 0px 25px;
        }
        //内容
        .Describe {
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
        .DiscussBtn {
          width: 780px;
          height: 50px;
          line-height: 50px;
          position: absolute;
          bottom: 0px;
          right: 0px;
          color: #999;
          font-size: 16px;
          padding-left: 500px;
          span {
            color: #f00;
          }
          button {
            outline: none;
            border: none;
            width: 90px;
            height: 30px;
            color: #fff;
            font-size: 16px;
            border-radius: 2px;
            margin-left: 10px;
            background-color: #3498DB;
            &:hover {
              opacity: .8;
            }
          }
        }
      }
    }
  }
</style>
