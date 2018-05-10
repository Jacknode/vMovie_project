<template>
  <!--电影系列-->
  <div class="SeriesPage">
    <div class="content">
      <!--顶部-->
      <p>
        <span>网络系列</span>
        <span>汇聚网络优秀系列</span>
      </p>
      <!--菜单 快捷栏-->
      <div class="ShortcutBar">
        <ul>
          <li v-for="item,index in Navs" @click="Switch(index)">{{item}}</li>
        </ul>
      </div>
      <!--内容部分-视频列表-全部系列-->
      <div class="MovieList" v-for="item in MovieSeriesList" v-show="MovieType.Alls">
        <!--视频详情-->
        <div class="MovieDetail">
          <!--左边图片-->
          <div class="imageBox">
            <!--图片-->
            <img v-lazy="item.vf_ss_SeriesImageURL" alt="" style="width: 150px; height: 200px">
          </div>
          <!--右边详情detail-->
          <div class="contDetail">
            <!--标题部分-->
            <div class="MovieName"><strong>{{item.vf_ss_Name}}</strong>{{item.vf_ss_UpdateTime}}</div>
            <!--描述-->
            <div class="Detail">{{item.vf_ss_Describ}}</div>
            <div class="MovieSection">
              <!--集数-->
              <p v-for="ims in item.vf_FilmSeries">{{ims.vf_fs_VedioName}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--内容部分-视频列表-更新中-->
      <div class="MovieList" v-for="item in MovieSeriesList" v-show="MovieType.UpDates">
        <!--视频详情-->
        <div class="MovieDetail">
          <!--左边图片-->
          <div class="imageBox">
            <img v-lazy="item.vf_ss_SeriesImageURL" alt="" style="width: 150px; height: 200px">
          </div>
          <!--右边详情detail-->
          <div class="contDetail">
            <!--标题-->
            <div class="MovieName"><strong>{{item.vf_ss_Name}}</strong>{{item.vf_ss_UpdateTime}}</div>
            <!--详情-->
            <div class="Detail">{{item.vf_ss_Describ}}</div>
            <div class="MovieSection">
              <!--集数-->
              <p v-for="ims in item.vf_FilmSeries">{{ims.vf_fs_VedioName}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--内容部分-视频列表-完结-->
      <div class="MovieList" v-for="item in MovieSeriesList" v-show="MovieType.ends">
        <!--视频详情-->
        <div class="MovieDetail">
          <!--左边图片-->
          <div class="imageBox">
            <!--图片-->
            <img v-lazy="item.vf_ss_SeriesImageURL" alt="" style="width: 150px; height: 200px">
          </div>
          <!--右边详情detail-->
          <div class="contDetail">
            <!--标题-->
            <div class="MovieName"><strong>{{item.vf_ss_Name}}</strong>{{item.vf_ss_UpdateTime}}</div>
            <!--详情-->
            <div class="Detail">{{item.vf_ss_Describ}}</div>
            <div class="MovieSection">
              <!--集数-->
              <p v-for="ims in item.vf_FilmSeries">{{ims.vf_fs_VedioName}}</p>
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
      'MovieSeriesList'
    ]),
    data(){
      return{
        Navs:["全部系列","更新中","完结"],
        MovieType:{Alls:true,UpDates:false,ends:false},
      }
    },
    methods:{
      init(){
        this.MovieType.Alls=false;
        this.MovieType.UpDates=false;
        this.MovieType.ends=false;
      },
      //切换
      Switch(index){
        if(index==0){
          this.init();
          this.initData();
          this.MovieType.Alls=true;
        }
        else if(index==1){
          this.init();
          this.initData(0);
          this.MovieType.UpDates=true;
        }
        else{
          this.init();
          this.initData(1);
          this.MovieType.ends=true;
        }
      },
      //连载中
      upDating(){
        this.initData(0);
      },
      //完结
      end(){
        this.initData(1);
      },
      //初始化
      initData(num){
        let initOption={
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_ss_ID": "",//系列编号
          "vf_ss_Name": "",//系列名称
          "vf_ss_WriteState": num,//连载状态（0连载中1完结)
          "page": 1,//页码
          "rows": 8//条数
        }
        this.$store.dispatch("initMovieSeriesList",initOption)
      }
    },
    created(){
      this.initData();
    }
  }
</script>

<style lang="less" scoped>
  .SeriesPage{
    width: 1200px;
    height: 900px;
    margin: 0px auto;
    .content{
      width: 100%;
      height: 100%;
      //顶部
      p{
        margin-top: 20px;
        span{
          &:nth-of-type(1){
            font-size: 28px;
            color: #666;
            font-family: "WenQuanYi Micro Hei";
          }
          &:nth-of-type(2){
            margin-left: 40px;
            color: #999;
            font-family: "WenQuanYi Micro Hei";
            font-size: 18px;
          }
        }
      }
      //快捷栏
      .ShortcutBar{
        width: 100%;
        margin-top: 20px;
        ul{
          display: flex;
          li{
            font-family: "WenQuanYi Micro Hei";
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            line-height: 30px;
            border-radius: 5px;
            cursor: pointer;
            color: #888;
            width: 70px;
            height: 30px;
            margin: 0px 10px 0px 10px;
            &:nth-of-type(1),&:hover{
              background-color: #0abda6;
              color: #fff;
            }
          }
        }
      }
      //视频列表-全部系列
      .MovieList{
        width: 100%;
        .MovieDetail{
          width: 380px;
          height: 200px;
          margin: 60px 10px 0px 10px;
          display: flex;
          float: left;
          .imageBox{
            margin-right: 10px;
            width: 150px;
            height: 200px;
          }
          .contDetail{
            .MovieName{
              height: 40px;
              line-height: 20px;
              font-size: 14px;
              strong{
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
              }
            }
            .Detail{
              color: #c8c8c8;
              height: 80px;
              line-height: 16px;
              padding-top: 5px;
              overflow: hidden;
            }
            .MovieSection{
              margin-top: 10px;
              p{
                height: 30px;
                line-height: 30px;
                margin-top: 10px;
                font-size: 12px;
                padding-left: 10px;
                border-radius: 2px;
                background-color: #c8c8c8;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
