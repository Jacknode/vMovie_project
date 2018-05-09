<template>
  <!--系列中的视频的内容--可以提交-->
  <div class="SeriesCont">
    <!--视频部分-->
    <div class="MoviePlay">
      <video src="" poster="@/assets/img/MovieSeriesCont.jpg" style="width: 100%"></video>
    </div>
    <!--视频其他参数-->
    <div class="MovieOtherInformation">
      <!--标题部分-->
      <div class="MovieTitle">
        <!--标题-->
        <div class="tLeft">
          【魔力记录】定制婚纱
          <span>自制</span>
        </div>
        <!--分享图标-->
        <div class="tRight"></div>
      </div>
      <!--更新-->
      <div class="MovieUpdata">
        <button>追我</button>
        <p style="display: inline-block;">已有<span>21345</span>人追过该系列</p>
        <strong>每周二、五更新</strong>
      </div>
      <!--集数详情-->
      <div class="EpisodeDetail">
        <a>1</a>
        <a>2</a>
      </div>
    </div>
    <!--评论-->
    <div class="MovieDiscuss">
      <!--评论细节-->
      <div class="DiscussDes">
        影片点评
        <span>已有0条点评</span>
      </div>
      <!--评论区-->
      <div class="DiscussCont">
        <img src="@/assets/img/HeaderPortrait.jpg" alt="" style="width: 50px; height: 50px">
        <!--内容-->
        <textarea type="text" class="Describe" placeholder="很不错"></textarea>
        <!--按钮-->
        <div class="DiscussBtn">
          还可以输入<span>2000</span>个字
          <button>发表评论</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .SeriesCont{
    width: 1000px;
    height: 1500px;
    margin: 20px auto 0px;
    //视频部分
    MoviePlay{
      width: 100%;
      height: 600px;
    }
    //视频其他参数
    .MovieOtherInformation{
      width: 100%;
      height: 540px;
      background-color: #eee;
      margin-top: 30px;
      //标题
      .MovieTitle{
        width: 680px;
        height: 50px;
        margin: 0px 0px 0px 120px;
        line-height: 50px;
        .tLeft{
          font-family: "Microsoft YaHei";
          font-size: 20px;
          font-weight: bold;
          span{
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
      .MovieUpdata{
        width: 680px;
        height: 50px;
        position: relative;
        line-height: 50px;
        margin: 0px 0px 0px 120px;
        button{
          outline: none;
          border: none;
          width: 50px;
          height: 30px;
          font-family: "Microsoft YaHei";
          color: #fff;
          border-radius: 2px;
          background-color: #3498DB;
          &:hover{
            opacity: .8;
          }
        }
        p{
          span{
            margin: 0px 4px 0px 4px;
            color: #999;
            font-size: 16px;
          }
        }
        strong{
          color: #999;
          position: absolute;
          right: 0px;
        }
      }
      //集数详情
      .EpisodeDetail{
        width: 680px;
        height: 400px;
        margin: 20px 0px 0px 120px;
        a{
          width: 28px;
          height: 28px;
          background-color: #fff;
          text-align: center;
          line-height: 28px;
          margin: 10px 0px 0px 5px;
          box-shadow: 1px 2px #c8c8c8;
          display: inline-block;
        }
      }
    }
    //评论
    .MovieDiscuss{
      width: 100%;
      height: 270px;
      margin-top: 10px;
      border: 1px solid rgb(241,241,241);
      //评论细节
      .DiscussDes{
        width: 880px;
        height: 45px;
        margin-left: 60px;
        line-height: 45px;
        font-size: 18px;
        font-family: "Microsoft YaHei";
        span{
          font-size: 16px;
          color: #c8c8c8;
          margin-left: 20px;
        }
      }
      //评论区
      .DiscussCont{
        width: 880px;
        height: 200px;
        margin: 5px 0px 0px 60px;
        position: relative;
        img{
          margin: 20px 0px 0px 25px;
        }
        //内容
        .Describe{
          width: 780px;
          height: 150px;
          resize: none;
          text-indent: 1em;
          padding-top: 5px;
          font-size: 16px;
          float: right;
          border: 1px solid #eee;
        }
        //按钮
        .DiscussBtn{
          width: 780px;
          height: 50px;
          line-height: 50px;
          position: absolute;
          bottom: 0px;
          right: 0px;
          color: #999;
          font-size: 16px;
          padding-left: 500px;
          span{
            color: #f00;
          }
          button{
            outline: none;
            border: none;
            width: 90px;
            height: 30px;
            color: #fff;
            font-size: 16px;
            border-radius:2px;
            margin-left: 10px;
            background-color: #3498DB;
            &:hover{
              opacity: .8;
            }
          }
        }
      }
    }
  }
</style>
