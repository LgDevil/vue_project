<template>
  <el-container>
    <el-header>
      <vue-header></vue-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      这里是页脚
    </el-footer>
  </el-container>
</template>

<script>
    import VueHeader from '../components/common/vue_header'

    export default {
        data(){
           return {}
        },
        components:{
          VueHeader
        },
       beforeRouteLeave(to, from, next){
          next();
      }
    }
</script>

<style scoped>
  footer{
    height:60px;
    position:fixed;
    bottom:0;
    left:0px;
    width: 100%;
    background-color: rgb(84, 92, 100);
  }
  .el-header{
    padding: 0px;
  }
</style>
