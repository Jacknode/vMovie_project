<template>
  <!--频道页面的视频列表-->
  <div class="MovieChannelList">
    <!--顶部信息-->
    <div class="TopListInformation">
      <!--标题-->
      <div class="ChannelTitle">
        <!--类型-->
        <span>实验</span>
        <p>当前共有影片<strong>250</strong>部</p>
      </div>
      <!--排序和快捷导航-->
      <div class="SortNav">
        <!--排序-->
        <ul>
          <strong>排序:</strong>
          <li v-for="item in MovieSort">{{item}}</li>
        </ul>
        <!--快捷导航-->
        <div class="ChannelTypeNav" @mouseover="BoxShow" @mouseleave='BoxClose'>所有频道<span class="el-icon-caret-right"></span></div>
        <!--导航器-->
        <div class="NavBox" ref="show" @mouseleave='BoxClose'>
          <dl>
            <dd v-for="item in Listis">{{item}}</dd>
          </dl>
        </div>
      </div>
    </div>
    <!--内容->视频列表-->
    <div class="ChannelContList">
      <!--视频-->
      <!--<div class="MovieContent" v-for="item,index in Movies">-->
      <!--<div class="ImgBox"><img src="@/assets/img/MovieChannel1.jpg" :class="{open:index==m,close:index==n}" @mouseenter="into(index)" @mouseleave="move(index)"></div>-->
      <!--&lt;!&ndash;视频信息&ndash;&gt;-->
      <!--<div class="MovieInformation">-->
      <!--&lt;!&ndash;视频标题&ndash;&gt;-->
      <!--<div class="MovieTitle">行为艺术实验短片《妄为》</div>-->
      <!--&lt;!&ndash;其他信息->评论、评分、点赞&ndash;&gt;-->
      <!--<div class="OtherInformation">-->
      <!--<span class="el-icon-tickets"> 35</span>-->
      <!--<span class="icon-heart5"> 233</span>-->
      <!--<p>-->
      <!--<el-rate-->
      <!--v-model="value5"-->
      <!--disabled-->
      <!--show-score-->
      <!--text-color="#ff9900"-->
      <!--score-template="{value}">-->
      <!--</el-rate>-->
      <!--</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>
      <!--视频-->
      <div class="MovieContent" v-for="item,index in MovieChannelTypeList">
        <!--<div class="ImgBox"><img src="@/assets/img/MovieChannel1.jpg" :class="{open:index==m,close:index==n}" @mouseenter="into(index)" @mouseleave="move(index)"></div>-->
        <div class="ImgBox"><img v-lazy="item.vf_vo_ImageURL" :class="{open:index==m,close:index==n}" @mouseenter="into(index)" @mouseleave="move(index)"></div>
        <!--视频信息-->
        <div class="MovieInformation">
          <!--视频标题-->
          <!--<div class="MovieTitle">行为艺术实验短片《妄为》</div>-->
          <div class="MovieTitle">{{item.vf_vo_Title}}</div>
          <!--其他信息->评论、评分、点赞-->
          <div class="OtherInformation">
            <!--评论-->
            <span class="el-icon-tickets"> 35</span>
            <!--点赞-->
            <!--<span class="icon-heart5"> 233</span>-->
            <span class="icon-heart5"> {{item.count_pointGood}}</span>
            <p>
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </p>
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
      'MovieChannelTypeList'
    ]),
    data(){
      return{
        value5:3.1,
        m:null,
        n:null,
        MovieSort:['最新发布','最高评分','评论最多','喜欢最多',],
        Movies:[{},{},{},{},{},{},{},{},{},{},{},{},],
        Listis:["创意","励志","搞笑","广告","旅行","爱情","剧情","运动","动画","音乐","实验","科幻"]
      }
    },
    methods:{
      into(index){
        this.m=index;
      },
      move(index){
        this.n=index;
      },
      BoxShow(){
        this.$refs.show.style.display='block';
      },
      BoxClose(){
        this.$refs.show.style.display='none';
      },
      initData(){
        let initOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_vt_TypeID": this.$route.query.id, //分类编号
          "orderColumn": "",//排序字段vf_vo_CreateTime按时间，count_pointGood按点赞次数
          "page": 1,//页码
          "rows": 12//条数
        }
        this.$store.dispatch("initMovieChannelTypeList",initOption)
      }
    },
    created(){
      this.initData();
    }
  }
</script>

<style lang="less" scoped type="text/less">
  .open{
    width: 300px;
    height: 200px;
  }
  .close{
    width: 280px;
    height: 180px;
  }
  //视频列表
  .MovieChannelList{
    width: 1200px;
    height: 1160px;
    margin: 0px auto;
    //顶部信息
    .TopListInformation{
      width: 100%;
      height: 140px;
      margin-top: 20px;
      //标题
      .ChannelTitle{
        height: 50px;
        width: 100%;
        line-height: 50px;
        span{
          color: #888;
          float: left;
          margin-left: 20px;
          font-size: 28px;
          font-family: "Microsoft YaHei";
        }
        p{
          color: #888;
          float: right;
          font-family: "Microsoft YaHei";
          font-size: 18px;
          margin-right: 50px;
          strong{
            color: #F00;
            font-size: 24px;
          }
        }
      }
      //排序和导航
      .SortNav{
        width: 100%;
        height: 90px;
        line-height: 90px;
        position: relative;
        //排序
        ul{
          strong,li{
            float: left;
          }
          strong{
            font-weight: bold;
            margin: 0px 10px 0px 5px;
          }
          li{
            width: 80px;
            text-align: center;
            &:hover{
              font-weight: bold;
              color: #E74C3C;
            }
          }
        }
        //快捷导航
        .ChannelTypeNav{
          width: 120px;
          height: 40px;
          margin-top: 25px;
          margin-right: 90px;
          line-height: 40px;
          background-color: #eee;
          text-align: center;
          font-family: "Microsoft YaHei";
          float: right;
          color: #898989;
          span{
            margin-left: 10px;
            zoom: 1.2;
          }
        }
        //导航器
        .NavBox{
          width: 260px;
          height:300px;
          background-color: rgb(250,250,250);
          position: absolute;
          z-index: 10;
          right: 50px;
          top: 25px;
          display: none;
          dl{
            dd{
              width: 90px;
              height: 30px;
              font-size: 18px;
              float: left;
              font-family: "Microsoft YaHei";
              line-height: 30px;
              text-align: center;
              margin: 17px 0px 0px 26px;
            }
          }
        }
      }
    }
    //内容->视频列表
    .ChannelContList{
      width: 100%;
      height: 1000px;
      .MovieContent{
        width: 280px;
        height: 300px;
        float: left;
        background-color: #eee;
        margin: 30px 10px 0px 10px;
        &:after{
          content: '';
          clear: both;
        }
        .ImgBox{
          width: 100%;
          height: 180px;
          overflow: hidden;
          img{
            width: 100%;
            height: 180px;
            transition: all 1s linear;
            transition-delay: 0.1s;
            &:hover{
              transform: scale(1.09,1.09);
            }
          }
        }
        .MovieInformation{
          margin-top: 20px;
          height: 100px;
          width: 100%;
          //视频标题
          .MovieTitle{
            width: 260px;
            color: #888;
            height: 40px;
            margin: 0px auto;
            font-size: 16px;
          }
          //其他信息
          .OtherInformation{
            margin-top: 20px;
            width: 100%;
            height: 30px;
            margin-bottom: 10px;
            span{
              color: #888;
              float: left;
              margin-left: 10px;
            }
            p{
              margin-right: 10px;
              float: right;
              display: inline-block;
            }
          }
        }
      }
    }
  }
</style>
