<template>
    <!--公共部分-->
  <div class="comment">
    <!--顶部-->
    <div class="PageTop">
      <img src="@/assets/img/movieLogo.png" alt="" @click="toHomePage">
      <!--导航-->
      <ul>
        <li :class="{active:index==n}" v-for="item,index in toArr" @click="toPath(index,item)">{{item.name}}</li>
        <li>教育</li>
      </ul>
    </div>
    <router-view name="Home"></router-view>
    <!--尾部-->
    <div class="PageFooter">
      <!--版权信息-->
      <div class="copyright"></div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        n:0,
        toArr:[
          {
            path:'MovieHomePage',
            name:'首页'
          },
          {
            path:'MovieChannel',
            name:'频道'
          },
          {
            path:'MovieSeries',
            name:'系列'
          }
        ]
      }
    },
    methods:{
      toPath(index,obj){
        this.$router.push({name:obj.path});
        sessionStorage.setItem('n',index);
        this.n = index;
      },
      toHomePage(){
        this.$router.push({name:'MovieHomePage'})
      },
    },
    created(){
      let n = sessionStorage.getItem('n');
      if(n==0||n){
        this.n = n;
      }
    }
   }
</script>

<style lang="less" scoped type="text/less">
  .comment{
    width: 100%;
    height: 65px;
    background-color: #ececec;
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
          &.active{
            border-bottom: 4px #3498Db solid;
          }
        }
      }
    }
    //尾部
    .PageFooter{
      width: 100%;
      height: 140px;
      background-color: #ececec;
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
