<template>
  <div class="index">
    <div class="container">
      <nav-header :navName="navName" />
      <div class="wrapper">
        <el-avatar
          class="photo"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="always">账号：{{ account }}</el-card>
          </el-col>
          <el-col :span="8">
            <el-badge :value="infoCount" class="item">
              <router-link to="/my-mission">
                <el-card shadow="always">我的任务</el-card>
              </router-link>
            </el-badge>
          </el-col>
          <el-col :span="8">
            <router-link to="/settings">
              <el-card shadow="always">设备设置</el-card>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/">
              <el-card shadow="always">注销账号</el-card>
            </router-link>
          </el-col>
        </el-row>
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
      navName: '我的信息',
      infoCount: 10,
      dialogVisible: false,
      account: '123456789'
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";

.wrapper {
  @include flex(space-around, center, column);
}
</style>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.photo {
  margin-top: 50px;
  height: 100px;
  width: 100px;
}
.wrapper {
  .el-row {
    @include flex(space-around, center, column);
    .el-col {
      width: 240px;
      margin-top: 30px;
      text-align: center;
      .el-badge {
        width: 100%;
      }
    }
  }
}
</style>
