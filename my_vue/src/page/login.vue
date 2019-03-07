<template>
<el-container id="container">
  <el-header></el-header>
  <el-main>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="" prop="username">
        <el-input v-model="form.username" autocomplete="off" placeholder="USERNAME" >
          <template slot="prepend">USERNAME</template>
        </el-input>
      </el-form-item>
      <el-form-item label="" prop="password" >
        <el-input v-model="form.password" autocomplete="off"  placeholder="PASSWORD">
          <template slot="prepend">PASSWORD</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">login</el-button>
        <el-button @click="resetForm">reset</el-button>
      </el-form-item>
    </el-form>
  </el-main>
  <el-footer>
  </el-footer>
</el-container>
</template>
<script>
  import {validatePass} from "../utils/validate"
  export default {
    name:"Login",
    data() {
      return {
        form: {
          username:"",
          password:""
        },
        rules:{
          password:[
            { required:true, validator: validatePass, trigger: 'blur' }
          ],
          username:[
            { required:true, validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(valid =>{
          if (valid) {
            window.localStorage.setItem('key', 'admin')
            this.$router.push({path:'/main'})
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      resetForm(){
        this.$refs.form.resetFields();
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
