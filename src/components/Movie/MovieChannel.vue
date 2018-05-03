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
      <!--电影短片-->
      <div class="MovieShort">
        <ul>
          <li v-for="item,index in mili" @mouseover="OpenShow(index)" @mouseout="CloseShow(index)"
              :class="{Open:index==n,Close:index==m}">
            <a href="#" class="el-icon-arrow-right"></a>
            <div class="ShortBtn">
              <img src="@/assets/img/MovieImg.jpg" alt="">
              <p>#{{item}}#</p>
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
    computed: mapGetters([
      'isLoading'
    ]),
    data(){
      return {
        n: null,
        m: null,
        mili: ['创意', '励志', '搞笑', '广告', '旅行', '爱情', '剧情', '运动', '动画', '音乐', '科幻', '预告'],
      }
    },
    methods: {
      OpenShow(index){
        this.n = index;
        this.m = null;
      },
      CloseShow(index){
        this.m = index;
        this.n = null;
      },
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .Open {
    .ShortBtn {
      right: 52px;
    }
  }

  .Close {
    .ShortBtn {
      right: 0px;
    }
  }

  .ChannelPage {
    width: 100%;
    height: 1000px;
    .content {
      width: 1200px;
      height: 100%;
      margin: 0px auto;
      p {
        margin-top: 20px;
        span {
          &:nth-of-type(1) {
            font-size: 26px;
            color: #666;
            font-family: "WenQuanYi Micro Hei";
          }
          &:nth-of-type(2) {
            color: #888;
            margin-left: 60px;
            font-size: 18px;
          }
        }
      }
      .MovieShort {
        margin-top: 10px;
        width: 100%;
        ul {
          list-style: none;
          //从这里开始修改
          li {
            float: left;
            width: 340px;
            height: 200px;
            margin: 35px 30px 0px 30px;
            overflow: hidden;
            position: relative;
            .ShortBtn {
              width: 100%;
              height: 100%;
              display: flex;
              position: relative;
              transition: all .6s linear;
              transition-delay: .12s;
              img {
                width: 100%;
                height: 100%;
                position: absolute;

              }
              p {
                position: absolute;
                top: 31%;
                left: 37%;
                color: #fff;
                font-family: "WenQuanYi Micro Hei";
                font-size: 24px;
              }
            }
            a {
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
