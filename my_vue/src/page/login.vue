<template>
<el-container id="container">
  <el-header></el-header>
  <el-main>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="">
        <el-input v-model="form.username" autocomplete="off" placeholder="USERNAME" >
          <template slot="prepend">USERNAME</template>
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.password" autocomplete="off"  placeholder="PASSWORD">
          <template slot="prepend">PASSWORD</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">login</el-button>
        <el-button>reset</el-button>
      </el-form-item>
    </el-form>
  </el-main>
  <el-footer>
  </el-footer>
</el-container>
</template>
<script>
  import Vue from 'vue'
  import {validatePass} from "../utils/validate"
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(ElementUI);
  export default {
    name:"login",
    data() {
      return {
        form: {
          username:"",
          password:""
        },
        rules:{
          password:[
            { validator: validatePass, trigger: 'blur' }
          ],
          username:[
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(valid =>{
          if (valid) {

            alert('submit!');

          } else {
            console.log('error submit!!');
            return false;
          }
        })
      }
    }
  }
</script>
<style>

  #container{
    background-image: url("../assets/login/backgroud.jpg") ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
  }

  form{
    margin-top: 26vh;
    margin-left: 31vw;
    width: 40vw
  }
</style>
