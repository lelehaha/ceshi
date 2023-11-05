<template>
  <div class="content">
    <!-- <t-button>23</t-button> -->
    <div class="middle">
      <h1>测试系统</h1>
      <el-form labelWidth="50px" :model="user">
        <el-form-item label="账号">
          <el-input v-model="user.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="land">登陆</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    // 登陆
    land() {
      if (this.user.name === "123456" && this.user.password === "123456") {
        this.$message.success("登陆成功");
        this.$router.push({ path: "/layout" });
      } else if (this.user.name === "" || this.user.password === "") {
        this.$message.error("账户名称或密码不能为空");
      } else if (this.user.name !== "123456") {
        this.$message.error("账户名称错误");
      } else if (this.user.password !== "123456") {
        this.$message.error("账户密码错误");
      }
    },
  },
};
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: inherit;
  background: #000;
  color: #fff;
}
.middle {
  width: 400px;
  padding: 160px 30px 0 30px;
  margin: 0 auto;
}
.middle h1 {
  text-align: center;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
}
/deep/.t-form .t-form__label {
  color: #fff;
  font-weight: bold;
}
</style>
