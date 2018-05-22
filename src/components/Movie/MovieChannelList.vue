<template>
  <!--频道页面的视频列表-->
  <div class="MovieChannelList">
    <!--顶部信息-->
    <div class="TopListInformation">
      <!--标题-->
      <div class="ChannelTitle">
        <!--类型-->
        <span>{{MovieChannelTypeObj.vf_te_Name?MovieChannelTypeObj.vf_te_Name:'暂无名称'}}</span>
        <p>当前共有影片<strong>{{MovieChannelTypeListNum.totalRows?MovieChannelTypeListNum.totalRows:'0'}}</strong>部</p>
      </div>
      <!--排序和快捷导航-->
      <div class="SortNav">
        <!--排序-->
        <ul>
          <strong>排序:</strong>
          <li :class="{active:index==x}" v-for="item,index in MovieSort" @click="SortMovie(index)">{{item}}</li>
        </ul>
        <!--快捷导航-->
        <div class="ChannelTypeNav" @mouseenter="BoxShow" @mouseleave=''>所有频道<span class="el-icon-caret-right"></span></div>
        <!--导航器-->
        <div class="NavBox" ref="Show" @mouseleave='BoxClose' v-show="BoxType">
          <dl>
            <dd v-for="its in MovieChannelList" @click="toMovieChannelList(its)">{{its.vf_te_Name}}</dd>
          </dl>
        </div>
      </div>
    </div>
    <!--内容->视频列表-->
    <div class="ChannelContList"  v-if="MovieChannelTypeList.length">

      <!--视频-->
      <div class="MovieContent" v-for="item,index in MovieChannelTypeList" @click="toMovieListDetail(item)">
        <div class="ImgBox"><img v-lazy="item.vf_vo_ImageURL" :class="{open:index==m,close:index==n}" @mouseenter="into(index)" @mouseleave="move(index)"></div>
        <!--视频信息-->
        <div class="MovieInformation">
          <!--视频标题-->
          <div class="MovieTitle">{{item.vf_vo_Title}}</div>
          <!--其他信息->评论、评分、点赞-->
          <div class="OtherInformation">
            <!--评论-->
            <span class="el-icon-tickets"> {{item.count_comment}}</span>
            <!--点赞-->
            <span class="fa fa-heart"> {{item.count_pointGood}}</span>
            <p>
              <el-rate
                v-model="item.a"
                disabled
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <i>{{item.average_score}}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="text-align: center;font-weight: bold;font-size: 20px;">暂无数据</div>
    <!--分页-->
    <div class="page" v-show="total">
      <el-pagination
        background
        @current-change="toPage"
        :page-size= "12"
        layout="prev,pager,next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed:mapGetters([
      'MovieChannelTypeListNum',
      'MovieChannelTypeList',
      'MovieChannelTypeObj',
      'MovieChannelList',
    ]),
    data(){
      return{
        value5:3.1,
        m:null,
        n:null,
        x:0,
        total:0,
        BoxType:false,
        MovieSort:['最新发布','最高评分','评论最多','喜欢最多',],
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
        this.BoxType=true;
      },
      mili(){
      },
      BoxClose(){
        this.BoxType=false;
      },
      //筛选排序
      SortMovie(index){
        this.x=index;
        if(index==0){
          this.initData(1);
        }
        else if(index==2){
          this.initData(2);
        }
      },
      //初始化
      initData(num,page){
        let initOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_vt_TypeID": this.$route.query.TypeID, //分类编号
          "orderColumn": num,//排序字段,1按时间，2点赞次数
          "page": page?page:1,//页码
          "rows": "12"//条数
        }
        this.$store.dispatch("initMovieChannelTypeList",initOption)
          .then((total)=>{
            this.total=total;
          })
      },
      toMovieListDetail(item){
        this.$router.push({name:'MovieListDetail',query:{id:item.vf_vo_ID}});
        setTimeout(()=>{
          window.location.reload();
        },30)
      },
      //类型数据
      initTypeData(){
        let initOption={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
        }
        this.$store.dispatch('initMovieChannelList',initOption)
      },
      //快捷导航jump
      toMovieChannelList(its){
        this.$router.push({name:'MovieChannelList',query:{TypeID:its.vf_te_ID}})
        setTimeout(()=>{
          window.location.reload();
        },30)
      },
      //分页
      toPage(page){
        this.initData(page)
      },
    },
    created(){
      this.initData(1);
      this.initTypeData();
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
  .active{
    color: #f00;
    font-weight: bold;
  }
  //视频列表
  .MovieChannelList{
    background-color: rgb(250,250,250);
    width: 1200px;
    margin: 0px auto;
    //顶部信息
    .TopListInformation{
      width: 100%;
      height: 140px;
      margin-top: 20px;
      &:after{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
      }
      //标题
      .ChannelTitle{
        height: 50px;
        width: 100%;
        line-height: 50px;
        &:after{
          content: '';
          height: 0;
          display: block;
          overflow: hidden;
          clear: both;
        }
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
            margin: 0px 5px 0px 5px;
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
        &:after{
          content: '';
          overflow: hidden;
          height: 0;
          display: block;
          clear: both;
        }
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
            cursor: default;
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
          background-color: rgb(255,255,255);
          position: absolute;
          z-index: 999;
          right: 30px;
          top: 25px;
          dl{
            dd{
              width: 90px;
              height: 30px;
              font-size: 18px;
              float: left;
              cursor: default;
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
      &:after{
        content: '';
        height: 0;
        overflow: hidden;
        display: block;
        clear: both;
      }
      .MovieContent{
        width: 280px;
        height: 300px;
        float: left;
        background-color: rgb(255,255,255);
        margin: 30px 10px 0px 10px;
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
              margin-right: 30px;
              float: right;
              display: inline-block;
              position: relative;
              i{
                color: rgb(247,168,42);
                position: absolute;
                top: 2px;
                right: -15px;
              }
            }
          }
        }
      }
    }
    //分页
    .page{
      height: 100px;
      width: 900px;
      padding-top: 30px;
      text-align: center;
      margin: 0px auto;
    }
  }
</style>
