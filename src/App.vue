<template>
  <div id="app">
    <!--loading加载-->
    <div class="loadingMask" v-show="isLoading">
      <div class="loadingMaskBox"></div>
      <div class="loadingContentBox">
        <i></i>
        <p>拼命加载中</p>
      </div>
    </div>
    <!--<comment></comment>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import Comment from '@/components/public/comment'
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{
    Comment
  },
  computed:mapGetters([
    'isLoading'
  ])
}
</script>

<style>
  /*加载遮罩*/
  .loadingMask .loadingContentBox {
    width: 100%;
    text-align: center;
    color: #409eff;
    position: absolute;
    z-index: 999;
    top: 50%;
  }

  .loadingMask .loadingContentBox i {
    width: 31px;
    height: 32px;
    background: url("./assets/img/loadingICon.png") no-repeat;
    display: block;
    margin: 0 auto 10px;
    animation: rotating 2s linear infinite;
  }
  .loadingMask .loadingMaskBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    background-color: #fff;
    /*opacity: .9;*/
  }
  .el-loading-spinner .circular {
    margin-left: 50%;
  }
</style>
