<template>
  <!--电影首页-->
  <div class="MovieHomePage">
    <!--轮播-->
    <div class="logo">
      <el-carousel trigger="click" :interval="5000" height="540px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="@/assets/img/MovieBanner.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--中间内容-->
    <div class="content">
      <ul>
        <!--切换器-->
        <li :class="{active:index==x}" v-for="item,index in switchList" @click="Switch(index)" ref="active">{{item}}</li>
      </ul>
      <!--最新推荐-->
      <!--切换的内容-->
      <div class="MovieList" v-show="mili.Recommend">
        <!--电影-->
        <div class="Movies" v-for="item in MovieHomePageList">
          <!--左边-->
          <div class="Movieleft">
            <img v-lazy="item.vf_vo_ImageURL" alt="" style="height: 198px">
            <!--时长-->
            <span>{{item.timeLength}}</span>
          </div>
          <!--右边-->
          <div class="MovieRight">
            <!--标题-->
            <div class="MovieName">{{item.vf_vo_Title}}</div>
            <!--评分-->
            <div class="MovieReta">
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <!--简介描述-->
            <div class="MovieDescribe">{{item.vf_vo_Introduce}}</div>
            <!--其他-->
            <div class="MovieOther">
              <div class="BoxBtm">
                <span>{{item.vf_vo_CreateTime}}</span>
                <!--点赞、评论-->
                <div class="BottomIconCont">
                  <!--评论-->
                  <span class="el-icon-document"> 213</span>
                  <!--点赞-->
                  <span class="icon-heart5"> {{item.count_pointGood}}</span>
                  <span class="el-icon-share">121</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--热门排行-->
      <div class="HotRanking" v-show="mili.Ranking">
        <!--排行选择-->
        <div class="RankingSel">
          <dl>
            <strong>排序:</strong>
            <dd v-for="item in RankingSels">{{item}}</dd>
          </dl>
        </div>
        <!--热门电影-->
        <div class="HotMovie" v-for="item in MovieHomePageList">
          <!--左边-->
          <div class="HotLeft">
            <img v-lazy="item.vf_vo_ImageURL" alt="" style="height: 198px">
            <span>{{item.timeLength}}</span>
          </div>
          <!--右边-->
          <div class="HotRight">
            <div class="HotMovieName">
              <span>{{item.vf_vo_Title}}</span>
            </div>
            <!--热门评分-->
            <div class="HotMovieReta">
              <!--影片作者-->
              {{item.vf_vo_AuthorName}}
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <!--简介描述-->
            <div class="HotMovieDec">{{item.vf_vo_Introduce}}</div>
            <!--其他-->
            <div class="HotOtherInmation">
              <div class="BoxBottom">
                <span>2018-04-15</span>
                <!--点赞、评论-->
                <div class="HotBottomIconCont">
                  <span class="el-icon-document"> 213</span>
                  <span class="icon-heart5"> {{item.count_pointGood}}</span>
                  <span class="el-icon-share">121</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--星级精选-->
      <div class="choose" v-show="mili.Select">
        <!--排行选择-->
        <div class="ChooseSel">
          <dl>
            <strong>排序:</strong>
            <dd>最新发布</dd>
            <dd>最高评分</dd>
          </dl>
        </div>
        <!--星级电影-->
        <div class="ChooseMovie" v-for="item in MovieHomePageList">
          <!--左边-->
          <div class="ChooseLeft">
            <img v-lazy="item.vf_vo_ImageURL" alt="" style="height: 198px">
            <!--时长-->
            <span>{{item.timeLength}}</span>
          </div>
          <!--右边-->
          <div class="ChooseRight">
            <!--标题-->
            <div class="ChooseMovieName"><span>{{item.vf_vo_Title}}</span>
              <!--<button>来自新片场</button>-->
            </div>
            <!--热门评分-->
            <div class="ChooseMovieReta">
              <!--影片作者-->
              {{item.vf_vo_AuthorName}}
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#f90"
                score-template="{value}">
              </el-rate>
            </div>
            <!--简介描述-->
            <div class="ChooseMovieDec">{{item.vf_vo_Introduce}}</div>
            <!--其他-->
            <div class="ChooseOtherInmation">
              <div class="BoxBot">
                <!--创建时间-->
                <span>{{item.vf_vo_CreateTime}}</span>
                <!--点赞、评论-->
                <div class="ChooseBottomIconCont">
                  <span class="el-icon-document"> 213</span>
                  <span class="icon-heart5"> {{item.count_pointGood}}</span>
                  <span class="el-icon-share">121</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--随便看看-->
      <div class="lookAround" v-show="mili.Watching">
        <!--随便看看电影-->
        <div class="WatchMovies" v-for="item in MovieHomePageList">
          <!--左边-->
          <div class="WatchMovieleft">
            <img v-lazy="item.vf_vo_ImageURL" alt="" style="height: 198px">
            <span>{{item.timeLength}}</span>
          </div>
          <!--右边-->
          <div class="WatchMovieRight">
            <!--标题-->
            <div class="WatchMovieName">{{item.vf_vo_Title}}</div>
            <!--评分-->
            <div class="WatchMovieReta">
              <!--影片作者-->
              {{item.vf_vo_AuthorName}}
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <!--简介描述-->
            <div class="WatchMovieDescribe">{{item.vf_vo_Introduce}}</div>
            <!--其他-->
            <div class="WatchMovieOther">
              <div class="BoxBtm">
                <!--创建时间-->
                <span>{{item.vf_vo_CreateTime}}</span>
                <!--点赞、评论-->
                <div class="WatchBottomIconCont">
                  <!--评论-->
                  <span class="el-icon-document"> 213</span>
                  <!--点赞-->
                  <span class="icon-heart5"> {{item.count_pointGood}}</span>
                  <!--分享-->
                  <span class="el-icon-share">121</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed:mapGetters([
      'MovieHomePageList',
    ]),
    data(){
      return{
        value5: 4.4,
        x:0,
        switchList:["最新推荐","热门排行","星级精选","随便看看"],
        RankingSels:["本周","本月","近三月","近一年"],
        mili:{Recommend:true,Select:false,Watching:false,Ranking:false},
      }
    },
    methods:{
      init(){
        this.mili.Recommend=false;
        this.mili.Select=false;
        this.mili.Watching=false;
        this.mili.Ranking=false;
      },
      //切换
      Switch(index){
        this.x=index;
        if(index==0){
          this.init();
          this.initData(42);
          this.mili.Recommend=true;
        }
        else if(index==1){
          this.init();
          this.initData(41);
          this.mili.Ranking=true;
        }
        else if(index==2){
          this.init();
          this.initData(40);
          this.mili.Select=true;
        }
        else{
          this.init();
          this.initData();
          this.mili.Watching=true;
        }
      },
      initData(num){
        let initOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_vt_TypeID": num, //40精选 41热门 42 推荐  空为随机
          "page": 1,//页码
          "rows": 10//条数

        }
        this.$store.dispatch("initMovieHomePageList",initOption)
      }
    },
    created(){
      this.initData(42);
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .active{
    background-color: #fff;
  }
  .MovieHomePage{
    width: 100%;
    height: 3400px;
    .logo{
      width: 1400px;
      /*height: 540px;*/
      margin: 0px auto;
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
    .content{
      width: 1198px;
      height: 2860px;
      margin: 40px auto 0px;
      border: 1px #ddd solid;
      ul{
        width: 100%;
        height: 50px;
        background-color: #f9f9f9;
        //切换器
        li{
          width: 120px;
          height: 100%;
          float: left;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
          font-family: "Microsoft YaHei";
          border-right: 1px #ddd solid;
          border-bottom: 1px #ddd solid;
          &:hover{
            background-color: #fff;
            border-bottom: none;
          }
        }
      }
      //最新推荐
      .MovieList{
        height: 100%;
        width: 100%;
        margin-top: 18px;
        .Movies{
          width: 1000px;
          height: 200px;
          margin: 70px auto 0px;
          display: flex;
          border: 1px solid #eee;
          .Movieleft{
            width: 300px;
            height: 200px;
            position: relative;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              transition: all 1s linear;
              transition-delay: .2s;
              &:hover{
                transform: scale(1.05,1.05);
              }
            }
            span{
              position: absolute;
              bottom: 5px;
              right: 5px;
              color: #fff;
              font-size: 16px;
              z-index: 2;
            }
          }
          .MovieRight{
            margin-left: 30px;
            width: 670px;
            height: 200px;
            position: relative;
            .MovieName{
              margin-top: 10px;
              font-weight: bold;
              font-size: 20px;
              font-family: "Microsoft YaHei";
            }
            .MovieReta{
              margin-top: 15px;
            }
            .MovieDescribe{
              margin-top: 10px;
              font-size: 14px;
              color: #aaa;
              line-height: 24px;
            }
            .MovieOther{
              .BoxBtm{
                width: 100%;
                height: 30px;
                line-height: 30px;
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
                  float: left;
                }
                .BottomIconCont{
                  height: 100%;
                  float: right;
                  margin-right: 40px;
                  span{
                    display: inline-block;
                    margin-left: 10px;
                    zoom: 1.1;
                    height: 100%;
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
      //热门排行
      .HotRanking{
        width: 100%;
        height: 1000px;
        margin-top: 18px;
        .RankingSel{
          width: 1000px;
          height: 50px;
          margin: 35px auto -40px;
          dl{
            strong,dd{
              line-height: 40px;
              float: left;
              font-family: "Microsoft YaHei";
              font-size: 16px;
            }
            strong{
              text-indent: 1em;
              margin-right: 10px;
              font-weight: bold;
            }
            dd{
              margin: 0px 10px 0px 10px;
              &:hover{
                color: #f00;
                font-weight: bold;
              }
            }
          }
        }
        .HotMovie{
          width: 1000px;
          height: 200px;
          margin: 70px auto 0px;
          display: flex;
          border: 1px solid #eee;
          .HotLeft{
            margin-right: 30px;
            position: relative;
            overflow: hidden;
            img{
              width: 300px;
              height: 100%;
              transition: all 1s linear;
              transition-delay: .2s;
              &:hover{
                transform: scale(1.05,1.05);
              }
            }
            span{
              position: absolute;
              bottom: 5px;
              right: 5px;
              color: #fff;
              font-size: 16px;
              z-index: 2;
            }
          }
          .HotRight{
            width: 670px;
            height: 100%;
            position: relative;
            .HotMovieName{
              margin-top: 10px;
              span{
                font-weight: bold;
                font-size: 20px;
                font-family: "Microsoft YaHei";
              }
              button{
                border: none;
                outline: none;
                height: 20px;
                width: 80px;
                color: #fff;
                background-color: #5cbeff;
                margin-left: 10px;
              }
            }
            .HotMovieReta{
              font-size: 14px;
              margin-top: 15px;
              color: #999;
              line-height: 18px;
            }
            .HotMovieDec{
              font-size: 14px;
              color: #aaa;
              margin-top: 10px;
              line-height: 24px;
            }
            .HotOtherInmation{
              .BoxBottom{
                width: 100%;
                height: 30px;
                line-height: 30px;
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
                  float: left;
                }
                .HotBottomIconCont{
                  height: 100%;
                  float: right;
                  margin-right: 40px;
                  span{
                    display: inline-block;
                    margin-left: 10px;
                    zoom: 1.1;
                    height: 100%;
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
      //星级精选
      .choose{
        .ChooseSel{
          width: 1000px;
          height: 50px;
          margin: 35px auto -40px;
          dl{
            strong,dd{
              line-height: 40px;
              float: left;
              font-family: "Microsoft YaHei";
              font-size: 16px;
            }
            strong{
              text-indent: 1em;
              margin-right: 10px;
              font-weight: bold;
            }
            dd{
              margin: 0px 10px 0px 10px;
              &:hover{
                color: #f00;
                font-weight: bold;
              }
            }
          }
        }
      }
      .ChooseMovie{
        width: 1000px;
        height: 200px;
        margin: 70px auto 0px;
        display: flex;
        border: 1px solid #eee;
        .ChooseLeft{
          margin-right: 30px;
          position: relative;
          overflow: hidden;
          img{
            width: 300px;
            height: 100%;
            transition: all 1s linear;
            transition-delay: .2s;
            &:hover{
              transform: scale(1.05,1.05);
            }
          }
          span{
            position: absolute;
            bottom: 5px;
            right: 5px;
            color: #fff;
            font-size: 16px;
            z-index: 2;
          }
        }
        .ChooseRight{
          width: 670px;
          height: 100%;
          position: relative;
          .ChooseMovieName{
            margin-top: 10px;
            span{
              font-weight: bold;
              font-size: 20px;
              font-family: "Microsoft YaHei";
            }
            button{
              border: none;
              outline: none;
              height: 20px;
              width: 80px;
              color: #fff;
              background-color: #5cbeff;
              margin-left: 10px;
            }
          }
          .ChooseMovieReta{
            font-size: 14px;
            margin-top: 15px;
            color: #999;
            line-height: 18px;
          }
          .ChooseMovieDec{
            font-size: 14px;
            color: #aaa;
            margin-top: 10px;
            line-height: 24px;
          }
          .ChooseOtherInmation{
            .BoxBot{
              width: 100%;
              height: 30px;
              line-height: 30px;
              position: absolute;
              bottom: 5px;
              left: 5px;
              span{
                font-size: 14px;
                color: #ccc;
                float: left;
              }
              .ChooseBottomIconCont{
                height: 100%;
                float: right;
                margin-right: 40px;
                span{
                  display: inline-block;
                  margin-left: 10px;
                  zoom: 1.1;
                  height: 100%;
                  line-height: 30px;
                }
              }
            }
          }
        }
      }
      //随便看看
      .lookAround{
        height: 1000px;
        width: 100%;
        margin-top: 18px;
        .WatchMovies{
          width: 1000px;
          height: 200px;
          margin: 70px auto 0px;
          display: flex;
          border: 1px solid #eee;
          .WatchMovieleft{
            width: 300px;
            height: 200px;
            position: relative;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              transition: all 1s linear;
              transition-delay: .2s;
              &:hover{
                transform: scale(1.05,1.05);
              }
            }
            span{
              position: absolute;
              bottom: 5px;
              right: 5px;
              color: #fff;
              font-size: 16px;
              z-index: 2;
            }
          }
          .WatchMovieRight{
            margin-left: 30px;
            width: 670px;
            height: 200px;
            position: relative;
            .WatchMovieName{
              margin-top: 10px;
              font-weight: bold;
              font-size: 20px;
              font-family: "Microsoft YaHei";
            }
            .WatchMovieReta{
              margin-top: 15px;
            }
            .WatchMovieDescribe{
              margin-top: 10px;
              font-size: 14px;
              color: #aaa;
              line-height: 24px;
            }
            .WatchMovieOther{
              .BoxBtm{
                width: 100%;
                height: 30px;
                line-height: 30px;
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
                  float: left;
                }
                .WatchBottomIconCont{
                  height: 100%;
                  float: right;
                  margin-right: 40px;
                  span{
                    display: inline-block;
                    margin-left: 10px;
                    zoom: 1.1;
                    height: 100%;
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
