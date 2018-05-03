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
          <li>全部系列</li>
          <li>更新中</li>
          <li>已完结</li>
        </ul>
      </div>
      <!--内容部分-视频列表-->
      <div class="MovieList" v-for="item in mili">
        <!--视频详情-->
        <div class="MovieDetail">
          <!--左边图片-->
          <div class="imageBox">
            <img src="@/assets/img/12.jpg" alt="" style="width: 150px; height: 200px">
          </div>
          <!--右边详情detail-->
          <div class="contDetail">
              <div class="MovieName"><strong>电影自习室</strong>每周一、四更新</div>
              <div class="MovieLoading"><button>追剧</button><span>2333</span>人正在追</div>
              <div class="Detail">【电影自习室】是V电影网出品的一档影视教学视频栏目，主要面向初级影视...</div>
              <div class="MovieSection">
                  <p>杭州不仅是一首诗</p>
                  <p>杭州不仅是一首诗</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!--分页-->
    <div class="page">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          mili:[{},{},{},{},{},{},{},{},{}]
        }
      }
    }
</script>

<style lang="less" scoped type="text/less">
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
      //视频列表
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
              line-height: 40px;
              strong{
                font-size: 20px;
                font-weight: bold;
                margin-right: 10px;
              }
            }
            .MovieLoading{
              height: 30px;
              button{
                width: 60px;
                height: 26px;
                color: #fff;
                border: none;
                outline: none;
                font-size: 16px;
                margin-right: 10px;
                border-radius: 3px;
                background-color: #3a8ee6;
              }
              span{
                margin-right: 10px;
                font-size: 16px;
                color: #c8c8c8;
              }
            }
            .Detail{
              color: #c8c8c8;
              height: 50px;
              line-height: 16px;
              padding-top: 5px;
            }
            .MovieSection{
              p{
                height: 30px;
                line-height: 30px;
                margin-top: 10px;
                padding-left: 10px;
                border-radius: 2px;
                background-color: #c8c8c8;
              }
            }

            /*div,dd{*/
              /*height: 40px;*/
            /*}*/
            /*div{*/
              /*strong{*/
                /*font-size: 20px;*/
                /*margin-right: 10px;*/
                /*line-height: 40px;*/
              /*}*/
              /*button{*/
                /*width: 60px;*/
                /*height: 26px;*/
                /*border: none;*/
                /*outline: none;*/
                /*font-size: 16px;*/
                /*color: #fff;*/
                /*margin-right: 10px;*/
                /*background-color: #f00;*/
              /*}*/
              /*span{*/
                /*margin-right: 5px;*/
                /*font-size: 16px;*/
                /*color: #c8c8c8;*/
              /*}*/
              /*&:nth-of-type(3){*/
                /*color: #c8c8c8;*/
              /*}*/
            /*}*/
            /*dl{*/
              /*dd{*/
                /*line-height: 40px;*/
                /*background-color: #f00;*/
              /*}*/
            /*}*/
          }
        }
      }
    }
    .page{
      margin-left: 40%;
    }
  }
</style>
