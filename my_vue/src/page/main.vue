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

</style>
