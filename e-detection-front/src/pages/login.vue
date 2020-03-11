<template>
  <div class="container">
    <el-avatar
      class="photo"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    ></el-avatar>
    <h4>E检测</h4>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="40px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 20px">
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <div style="margin-top: 40px">
        <el-checkbox-group v-model="loginChoice" size="mini">
          <el-checkbox label="记住密码" border></el-checkbox>
          <el-checkbox label="自动登录" border></el-checkbox>
        </el-checkbox-group>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    let validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginChoice: [],
      ruleForm: {
        pass: '',
        account: ''
      },
      rules: {
        account: [{ validator: validateAccount, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({path: '/index'})
        } else {
          console.log('账号或者密码错误')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.container {
  .photo {
    margin-top: 80px;
    height: 100px;
    width: 100px;
  }
  @include flex(space-around, center, column);
  .el-form {
    margin-top: 30px;
  }
}
</style>
