<template>
  <div class="footer">
    <div class="container">
      <div class="home">
        <a href="/#/index" class="item">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </a>
      </div>
      <div class="punch">
        <a href="/#/punch" class="item">
          <i class="el-icon-s-claim"></i>
          <span>打卡</span>
        </a>
      </div>
      <div class="my-info">
        <a href="/#/my-info" class="item">
          <el-badge is-dot class="item">
          <i class="el-icon-user"></i>
          <span>我的</span>
          </el-badge>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";

.footer {
  width: 359px;
  position: fixed;
  bottom: 0;
  .container {
    @include flex(space-around);
    div {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      margin-bottom: 5px;
      .item {
        @include flex(center, center, column);
        i {
          font-size: 26px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.footer {
  .container {
    .my-info {
      .item {
        .el-badge {
          width: 55px;
          height: 46px;
        }
      }
    }
  }
}
</style>
