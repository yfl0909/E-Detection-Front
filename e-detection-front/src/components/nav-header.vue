<template>
  <div class="header">
    <div class="container">
      <a @click="goback">
        <i class="el-icon-back"/>
      </a>
      <span>{{ navName }}</span>
      <router-link to="/settings">
        <i size="big" class="el-icon-setting"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navName: ''
  },
  data () {
    return {}
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.header {
  .container {
    @include flex();
    font-size: 25px;
    span {
      margin-top: 1px;
      font-size: 20px;
    }
  }
}
</style>
