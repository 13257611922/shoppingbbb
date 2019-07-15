<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/login.html">会员登录</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="bg-wrap">
          <div class="nav-tit">
            <a class="selected" href="javascript:;">账户登录</a>
            <i>|</i>
            <a href="/register.html">免费注册</a>
          </div>

          <div id="loginform" name="loginform" class="login-box">
            <div class="input-box">
              <!-- 用户名 -->
              <input
                id="txtUserName"
                name="txtUserName"
                type="text"
                placeholder="用户名/手机/邮箱"
                maxlength="50"
                v-model.trim="username"
              />
            </div>
            <!-- 密码框 -->
            <div class="input-box">
              <input
                id="txtPassword"
                name="txtPassword"
                type="password"
                placeholder="输入登录密码"
                maxlength="16"
                v-model.trim="password"
              />
            </div>
            <div class="btn-box">
              <input id="btnSubmit" name="btnSubmit" type="submit" value="立即登录" @click="loginBtn" />
            </div>
            <!-- 检测登录状态 -->
            <input type="button" value="检测登录" class="detection" @click="detectionBtn" />
            <!-- 注销账号(登出) -->
            <input type="button" value="注销" class="detection" @click="logoutBtn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 用户名
      username: "admin",
      // 密码
      password: "123"
    };
  },
  methods: {
    // 用户登录请求
    loginBtn() {
      this.$axios
        .post("site/account/login", {
          // user_name: "admin",
          user_name: this.username,
          // password: "123"
          password: this.password
        })
        .then(backData => {
          // console.log(backData);
          if (backData.data.status == 0) {         
            // 饿了么ui成功提示框
            this.$message({
              message: "登录成功",
              type: "success"
            });
            // 跳转会员中心页面
            this.$router.push('/user');
          } else if (backData.data.status == 1) {
            // 饿了么ui错误提示框
            this.$message.error("用户名或密码输入错误!!");
          }
        });
    },
    // 判断登录状态请求
    detectionBtn() {
      this.$axios.get("site/account/islogin").then(backData => {
        // console.log(backData);
      });
    },
    // 注销用户
    logoutBtn(){
      this.$axios
      .get('site/account/logout')
      .then(backData=>{
        console.log(backData);
        if(backData.data.status == 0){
          alert(backData.data.message)
        }
      })
    }
  }
};
</script>

<style>
.detection {
  padding: 5px;
  border: 1px solid red;
}
</style>
