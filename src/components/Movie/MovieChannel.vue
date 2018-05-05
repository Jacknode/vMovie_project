<template>
  <!--电影频道-->
  <div class="ChannelPage">
    <!--内容部分-->
    <div class="content">
      <!--顶部标题-->
      <p>
        <span>频道分类 </span>
        <span>分享浏览优秀短片</span>
      </p>
      <!--电影短片类型-->
      <div class="MovieShort">
        <ul>
          <!--类型分类-->
          <li v-for="item,index in MovieChannelList" @mouseenter="OpenShow(index)" @mouseleave="CloseShow(index)">
            <a href="#" class="el-icon-arrow-right"></a>
            <div class="ShortBtn">
              <!--类型分类图片-->
              <img v-lazy="item.vf_te_TypeImage" alt="">
              <p>#{{item.vf_te_Name}}#</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed:mapGetters([
      'MovieChannelList'
    ]),
    data(){
      return{
        n:null,
        m:null,
      }
    },
    methods:{
      OpenShow(index){
        this.n=index;
      },
      CloseShow(index){
        this.m=index;
      },
      //初始化
      initData(){
        let initOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
        }
        this.$store.dispatch('initMovieChannelList',initOption)
      }
    },
    created(){
      this.initData();
    }
  }
</script>

<style lang="less" scoped>
  .ChannelPage{
    width: 100%;
    height: 1200px;
    .content{
      width: 1200px;
      height: 100%;
      margin: 0px auto;
      p{
        margin-top: 20px;
        span{
          &:nth-of-type(1){
            font-size: 26px;
            color: #666;
            font-family: "WenQuanYi Micro Hei";
          }
          &:nth-of-type(2){
            color: #888;
            margin-left: 60px;
            font-size: 18px;
          }
        }
      }
      .MovieShort{
        margin-top: 10px;
        width: 100%;
        ul{
          list-style: none;
          li{
            float: left;
            width: 340px;
            height: 200px;
            margin: 35px 30px 0px 30px;
            overflow: hidden;
            position: relative;
            .ShortBtn{
              width: 100%;
              height: 100%;
              display: flex;
              position: relative;
              img{
                width: 100%;
                height: 100%;
                position: absolute;
                transition: all .4s linear;
                transition-delay: .12s;
                &:hover{
                  transform: translateX(-52px);
                }
              }
              p{
                position: absolute;
                top: 31%;
                left: 37%;
                color: #fff;
                font-family: "WenQuanYi Micro Hei";
                font-size: 24px;
              }
            }
            a{
              width: 52px;
              height: 200px;
              color: #fff;
              font-size: 32px;
              padding: 0px 10px 0px 10px;
              display: block;
              line-height: 184px;
              background-color: #ddd;
              position: absolute;
              right: 0px;
              top: 0px;
            }
          }
        }
      }
    }
  }
</style>
