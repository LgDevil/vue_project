<template>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" @click="to_write_blog">博客编写</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的博客</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">退出</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4" @click="to_blog_msg">博客管理</el-menu-item>
  <el-menu-item index="5"  @click="login_out">退出登录</el-menu-item>
</el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '4',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      login_out(){
        window.localStorage.removeItem('key');
        this.$router.push('/')
      },
      to_write_blog(){
        /*let routeUrl = this.$router.resolve({
          path: "/main/blog-msg",
          query: {id:96}
        });
        window.open(routeUrl .href, '_blank');*/
        this.$router.push('/main/write_blog')
      },
      to_blog_msg(){
        /*let routeUrl = this.$router.resolve({
          path: "/main/blog-write",
          query: {id:96}
        });
        window.open(routeUrl .href, '_blank');*/

        this.$router.push('/main/blog_msg')
      }
    }
  }
</script>
