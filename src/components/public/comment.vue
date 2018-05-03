<template>
    <!--公共部分-->
  <div class="comment">
    <!--顶部-->
    <div class="PageTop">
      <img src="@/assets/img/movieLogo.png" alt="">
      <!--导航-->
      <ul>
        <!--<li @click="HomePage">首页</li>-->
        <router-link to="MovieHomePage" tag="li">首页</router-link>
        <router-link to="MovieChannel" tag="li">频道</router-link>
        <router-link to="MovieSeries" tag="li">系列</router-link>
        <li>教育</li>
        <!--<li @click="Channel">频道</li>-->
        <!--<li @click="Series">系列</li>-->
        <!--<li>教育</li>-->
      </ul>
    </div>
    <!--需要修改-->
    <router-view name="Home"></router-view>
    <!--<MovieHomePage v-show="HomePageShow"></MovieHomePage>-->
    <!--<MovieSeries v-show="SeriesShow"></MovieSeries>-->
    <!--<MovieChannel v-show="ChannelShow"></MovieChannel>-->
    <!--尾部-->
    <div class="PageFooter">
      <!--版权信息-->
      <div class="copyright"></div>
    </div>
  </div>
</template>

<script>
  import MovieSeries from '@/components/Movie/MovieSeries'
  import MovieChannel from '@/components/Movie/MovieChannel'
  import MovieHomePage from '@/components/Movie/MovieHomePage'

  export default {
    data(){
      return{
        "ChannelShow":false,
        "SeriesShow":false,
        "HomePageShow":false,
      }
    },
    components:{
      MovieSeries,
      MovieChannel,
      MovieHomePage
    },
    methods:{
//      Series(){
//        this.SeriesShow= true;
//        this.ChannelShow= false;
//        this.HomePageShow=false;
//      },
//      Channel(){
//        this.ChannelShow= true;
//        this.SeriesShow= false;
//        this.HomePageShow=false;
//      },
//      HomePage(){
//        this.HomePageShow= true;
//        this.ChannelShow=false;
//        this.SeriesShow=false;
//      }
    },
    created(){
//      this.HomePage();
    }
   }
</script>

<style lang="less" scoped type="text/less">
  .comment{
    width: 100%;
    height: 65px;
    background-color: #c8c8c8;
    //顶部
    .PageTop{
      margin: 0px auto;
      width: 1200px;
      height: 100%;
      img{
        width: 110px;
        height: 35px;
        margin-top: 15px;
        float: left;
        cursor: pointer;
      }
      ul{
        line-height: 65px;
        li{
          float: left;
          width: 50px;
          height: 65px;
          cursor: pointer;
          text-align: center;
          font-size: 16px;
          margin: 0px -10px 0px 50px;
          &:hover{
            border-bottom: 4px #3498Db solid;
          }
        }
      }
    }
    //尾部
    .PageFooter{
      width: 100%;
      height: 140px;
      background-color: #c8c8c8;
      margin-top: 60px;
      .copyright{
        width: 1200px;
        height: 100%;
        margin: 0px auto;
        text-align: center;
      }
    }
  }
</style>
