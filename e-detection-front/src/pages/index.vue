<template>
  <div class="index">
    <div class="container">
      <nav-header :navName="navName" />

      <div class="alert-info" v-if="temp > 37.3">
        <el-alert title="体温过高  " type="error" center show-icon></el-alert>
      </div>

      <div class="main">
        <img src="../assets/imgs/header.png" alt />
        <div class="temp-bar" v-if="temp < 37.3">
          <span>当前体温：</span>
          <el-link class="temp" type="success">{{ temp }} ℃</el-link>
        </div>
        <div class="temp-bar" v-else>
          <span>当前体温：</span>
          <el-link class="temp" type="danger">{{ temp }} ℃</el-link>
        </div>
        <el-button type="primary" round @click="uploadMsg">上传信息</el-button>
        <span></span>
        <el-button type="info" round @click="redetect">重新检测</el-button>
      </div>

      <nav-footer></nav-footer>
    </div>
  </div>
</template>

<script>
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'

export default {
  data () {
    return {
      navName: '首页',
      temp: '36.5'
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    uploadMsg () {
      this.$alert('信息上传成功！', '上传信息', {
        center: true,
        confirmButtonText: '确定',
        callback: action => {}
      })
    },
    redetect () {
      this.temp = Math.round(Math.random() * 3 + 36) + Math.round(Math.random() * 10) * 0.1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.alert-info {
  margin: 5px auto 0px auto;
  width: 40%;
}
.main {
  @include flex(space-around, center, column);
  img {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80%;
  }
  button {
    margin-top: 10px;
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 22px;
  }

  .temp-bar {
    font-size: 22px;
    height: 50px;
    line-height: 50px;
    .temp {
      font-size: 26px;
    }
  }
}
</style>

// 单独修改element-ui的样式 element-ui不能在有scoped内修改
<style lang="scss">
.el-message-box {
  width: 280px;
}
</style>
