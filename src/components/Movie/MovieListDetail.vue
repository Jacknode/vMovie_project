<template>
  <!--视频详情-->
  <div class="ListDetail">
    <!--视频详情区-->
    <div class="MovieDetail">
      <!--顶部->视频标题-->
      <div class="MovieTop">
        <div class="Title">超励志短片《打不倒的小女孩》</div>
        <!--视频资料-->
        <div class="MovieData">
          <!--左边-->
          <div class="MovieDataLeft">
            <span>
            <!--作者-->
            王不留行
          </span>
            发布于
            <!--时间-->
            <span>2018-04-29</span>
            频道:
            <!--视频类型-->
            <span>励志</span>
            <!--评分-->
            <span style="display: inline-block;">
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
            </span>
            <!--评分人数-->
            (已有<span></span>人评分)
          </div>
          <!--右边-->
          <div class="MovieDataRight"></div>
        </div>
      </div>
      <!--视频详情-->
      <div class="MovieCont">
        <video src="" poster="@/assets/img/MovieDetail1.jpg"></video>
        <!--简介->内容概要-->
        <div class="ContentAbstract">
          片中的小女孩，真的只是一个小女孩，作为一个外表柔弱的小女孩，她成为了一个欺凌弱小的受害者。如果你看到RIKA ISHIGE在赛场KO对手的英武，你能想到她曾经也是被人欺负的受害者吗？《Tiny Doll》是一部传记片，讲述了泰国第一斗士、MMA 的冠军 RIKA ISHIGE 的励志人生。
          在长达 6 分钟的拍摄中，她将观众从她的故事从头开始讲起，因为她的童年创伤激发了她的斗志。短片把“纸巾”贯穿其中，通过最后成功后对着镜子看着的自己连接到当时年幼的自己。木材经过千锤百炼才成为柔韧的纸巾，正如 RIKA ISHIGE 经历了种种考验、磨难才赢得胜利。
          RIKA ISHIGE 找到了战胜恐惧的力量，成为了一个 MMA 的冠军。KLEENEX 不仅打破了常规，还提高了泰国对恃强凌弱的认识，让泰国妇女在保持她们温柔的同时学会反击。现在的她，却开始到处为“小娃娃”而战。背景音乐：My Life as Ali Thomas - KISS
        </div>
        <!--版权-->
        <div class="CopyRight">本文文字内容归本站版权所有，转载请注明来自V电影</div>
        <!--标签-->
        <div class="MovieLabel">
          标签：
          <!--修改为数组-->
          <span>励志</span>
        </div>
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
      <!--评论区-->
      <div class="DiscussCont">
        <!--评论头像-->
        <div class="DiscussUser">
          <img src="" alt="">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        value5:2.7,
      }
    }
  }
</script>

<style lang="less" scoped>
  //电影列表详情
  .ListDetail{
    width: 1000px;
    height: 1900px;
    margin: 0px auto;
    //视频详情
    .MovieDetail{
      width: 100%;
      height: 1000px;
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
        .MovieData{}
      }
      //视频内容
      .MovieCont{
        //视频
        video{
          width: 700px;
          margin-left: 150px;
        }
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
          margin-left: 30px;
          margin-top: 20px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #c8c8c8;
          font-size: 16px;
          background-color: #eee;
        }
        //标签
        .MovieLabel{
          margin-top: 10px;
        }
      }
    }
    //评论区
    .MovieDiscuss{
      width: 1000px;
      height: 1000px;
      //顶部
      .DiscussTop{
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #eee;
        strong{
          font-size: 20px;
          font-weight: bold;
          margin-left: 10px;
          margin-right: 20px;
        }
        strong,span{
          float: left;
        }
        span{
          height: 40px;
          line-height: 20px;
        }
        button{
          width: 90px;
          height: 30px;
          float: right;
          border: none;
          outline: none;
          font-size: 16px;
          margin-right: 100px;
          font-family: "Microsoft YaHei";
          color: #fff;
          background-color: #3498db;
          &:hover{
            opacity: .7;
          }
        }
      }
      //评论
      .DiscussCont{
        width: 1000px;
        height: 140px;
        border-bottom: 1px solid #eee;
        //评论者头像
        .DiscussUser{
          height: 100%;
          width: 140px;
          margin-left: 20px;
          margin-right: 18px;
          float: left;
          img{
            width: 70px;
            height: 70px;
            margin-top: 30px;
          }
        }
        .DiscussDetail{
          width: 820px;
          height: 140px;
          float: right;
          position: relative;
          //评论id
          .DiscussID{
            margin-top: 5px;
            color: #ccc;
            font-size: 16px;
          }
          //评论详情
          .DiscussInformation{
            margin-top: 10px;
            font-size: 14px;
            color: #444;
            text-indent: 1em;
          }
          //评论时间\来源
          .DiscussTime{
            position: absolute;
            bottom: 10px;
            color: #ccc;
            strong{
              float: right;
              margin-left: 580px;
              a{
                display: inline-block;
                color: #3498db;
              }
            }
          }
        }
      }
    }
  }
</style>
