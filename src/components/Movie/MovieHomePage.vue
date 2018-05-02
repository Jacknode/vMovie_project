<template>
  <!--电影首页-->
    <div class="MovieHomePage">
      <!--Logo部分的轮播-->
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
          <li :class="{active:index==x}" v-for="item,index in switchList" @click="Switch(index)" ref="active">{{item}}</li>
        </ul>
        <!--最新推荐-->
        <div class="MovieList" v-show="mili.Recommend">
          <!--电影-->
          <div class="Movies" v-for="item in Movies">
            <!--左边-->
            <div class="Movieleft">
              <img src="@/assets/img/11.jpg" alt="">
              <span>04:00</span>
            </div>
            <!--右边-->
            <div class="MovieRight">
              <div class="MovieName">大片即视感超燃视觉系《玩转疯狂赛车》</div>
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
              <!--描述-->
              <div class="MovieDescribe">继在沙子里游泳后，NASA 的退役工程师 Mark Rober 又出新招数！借鉴电影中的经典飙车场景，把玩具赛车拍出了大片追击战的感觉。</div>
              <!--其他-->
              <div class="MovieOther">
                <div class="BoxBtm">
                  <span>9小时前</span>
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
          <div class="HotMovie" v-for="item in HotMovies">
            <!--左边-->
            <div class="HotLeft">
              <img src="@/assets/img/hotRanking.jpg" alt="">
              <span>04:00</span>
            </div>
            <!--右边-->
            <div class="HotRight">
              <div class="HotMovieName"><span>怀旧风叛逆少女回忆录《荼靡旧梦》</span>
                <!--<button>来自新片场</button>-->
              </div>
              <!--热门评分-->
              <div class="HotMovieReta">
                影片作者:石腾帅
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <!--描述-->
              <div class="HotMovieDec">你，温暖美丽</div>
              <!--其他-->
              <div class="HotOtherInmation">
                <div class="BoxBottom">
                  <span>2018-04-15</span>
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
          <div class="ChooseMovie" v-for="item in ChooseMovies">
            <!--左边-->
            <div class="ChooseLeft">
              <img src="@/assets/img/hotRanking.jpg" alt="">
              <span>04:00</span>
            </div>
            <!--右边-->
            <div class="ChooseRight">
              <div class="ChooseMovieName"><span>怀旧风叛逆少女回忆录《荼靡旧梦》</span>
                <!--<button>来自新片场</button>-->
              </div>
              <!--热门评分-->
              <div class="ChooseMovieReta">
                <!--影片作者:石腾帅-->
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#f90"
                  score-template="{value}">
                </el-rate>
              </div>
              <!--描述-->
              <div class="ChooseMovieDec">你，温暖美丽</div>
              <!--其他-->
              <div class="ChooseOtherInmation">
                <div class="BoxBot">
                  <span>9小时前</span>
                </div>
              </div>
            </div>
        </div>
      </div>
        <!--随便看看-->
        <div class="lookAround" v-show="mili.Watching">
          <!--电影-->
          <div class="WatchMovies" v-for="item in WatchMovies">
            <!--左边-->
            <div class="WatchMovieleft">
              <img src="@/assets/img/hotRanking.jpg" alt="">
              <span>04:00</span>
            </div>
            <!--右边-->
            <div class="WatchMovieRight">
              <div class="WatchMovieName">怀旧风叛逆少女回忆录《荼靡旧梦》</div>
              <!--评分-->
              <div class="WatchMovieReta">
                <el-rate
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <!--描述-->
              <div class="WatchMovieDescribe">你，温暖美丽</div>
              <!--其他-->
              <div class="WatchMovieOther">
                <div class="BoxBtm">
                  <span>2018-04-15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          value5: 4.4,
          x:0,
          Movies:[{},{},{},],
          HotMovies:[{},{},{},],
          ChooseMovies:[{},{},{},],
          WatchMovies:[{},{},{},],
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
            this.mili.Recommend=true;
          }
          else if(index==1){
            this.init();
            this.mili.Ranking=true;
          }
          else if(index==2){
            this.init();
            this.mili.Select=true;
          }
          else{
            this.init();
            this.mili.Watching=true;
          }
          // console.log(index);
          // if(index==0){
          //   this.Recommend=true;
          //   this.Ranking=false;
          //   this.Select=false;
          //   this.watching=false;
          //   this.x=index;
          // }
          // else if(index==1){
          //   this.Recommend=false;
          //   this.Select=false;
          //   this.Watching=false;
          //   this.Ranking= true;
          //   this.x=index;
          // }
          // else if(index==2){
          //   this.Recommend=false;
          //   this.Ranking=false;
          //   this.Watching=false;
          //   this.Select=true;
          //   this.x=index;
          // }
          // else {
          //   this.Recommend=false;
          //   this.Select=false;
          //   this.Ranking=false;
          //   this.Watching=true;
          //   this.x=index;
          // }
        }
      }
    }
</script>

<style lang="less" scoped>
  .active{
    background-color: #fff;
  }
  .MovieHomePage{
    width: 100%;
    height: 1600px;
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
      height: 1020px;
      margin: 40px auto 0px;
      border: 1px #ddd solid;
      ul{
        width: 100%;
        height: 50px;
        background-color: #f9f9f9;
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
        height: 1000px;
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
            img{
              width: 100%;
              height: 100%;
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
              font-size: 18px;
              color: #aaa;
              line-height: 24px;
            }
            .MovieOther{
              .BoxBtm{
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
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
            img{
              width: 300px;
              height: 100%;
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
              /*button{*/
                /*border: none;*/
                /*outline: none;*/
                /*height: 20px;*/
                /*width: 80px;*/
                /*color: #fff;*/
                /*background-color: #5cbeff;*/
                /*margin-left: 10px;*/
              /*}*/
            }
            .HotMovieReta{
              font-size: 14px;
              margin-top: 15px;
              color: #999;
              line-height: 18px;
            }
            .HotMovieDec{
              font-size: 16px;
              color: #aaa;
              margin-top: 10px;
              line-height: 24px;
            }
            .HotOtherInmation{
              .BoxBottom{
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
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
          img{
            width: 300px;
            height: 100%;
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
            /*button{*/
              /*border: none;*/
              /*outline: none;*/
              /*height: 20px;*/
              /*width: 80px;*/
              /*color: #fff;*/
              /*background-color: #5cbeff;*/
              /*margin-left: 10px;*/
            /*}*/
          }
          .ChooseMovieReta{
            font-size: 14px;
            margin-top: 15px;
            color: #999;
            line-height: 18px;
          }
          .ChooseMovieDec{
            font-size: 16px;
            color: #aaa;
            margin-top: 10px;
            line-height: 24px;
          }
          .ChooseOtherInmation{
            .BoxBot{
              position: absolute;
              bottom: 5px;
              left: 5px;
              span{
                font-size: 14px;
                color: #ccc;
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
            img{
              width: 100%;
              height: 100%;
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
              font-size: 18px;
              color: #aaa;
              line-height: 24px;
            }
            .WatchMovieOther{
              .BoxBtm{
                position: absolute;
                bottom: 5px;
                left: 5px;
                span{
                  font-size: 14px;
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
    }
</style>
