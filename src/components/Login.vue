<template>
  <el-card>
    <input type="text" v-model="loginForm.userName" placeholder="请输入用户名">
    <br><br>
    <input type="password" v-model="loginForm.passWord" placeholder="请输入密码">
    <br><br>
    <button v-on:click="login">登录</button>
  </el-card>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          userName: this.loginForm.userName,
          passWord: this.loginForm.passWord
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          } else {
            alert(successResponse.data.msg);
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
