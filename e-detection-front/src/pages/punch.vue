<template>
  <div class="index">
    <div class="container">
      <nav-header :navName="navName" />
      <div class="wrapper">
        <el-tag v-if="startTime" type="success">打卡时间：{{ startTime }}</el-tag>
        <h2 v-if="!startTime">开始今日打卡吧</h2>
        <h1 id="mytime">{{str}}</h1>
        <!-- <input id="mytime" type="text" name="" value="显示时间"> -->
        <el-button v-if="startStatus" id="start" name="button" @click="start" type="primary" plain>
          开始
        </el-button><span></span>
        <el-button v-if="startStatus && startTime" id="reset" name="button" @click="reset" type="success" plain>
          提交打卡时长
        </el-button>
        <el-button v-if="!startStatus" id="stop" name="button" @click="stop" type="warning" plain>
          暂停打卡
        </el-button>
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
      navName: '每日打卡',
      h: 0, // 定义时，分，秒，毫秒并初始化为0；
      m: 0,
      ms: 0,
      s: 0,
      time: 0,
      str: '00:00:00',
      mytime: '',
      startStatus: 'true',
      startTime: '',
      punchStatus: false
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    timer () {
      // 定义计时函数
      this.ms = this.ms + 50 // 毫秒
      if (this.ms >= 1000) {
        this.ms = 0
        this.s = this.s + 1 // 秒
      }
      if (this.s >= 60) {
        this.s = 0
        this.m = this.m + 1 // 分钟
      }
      if (this.m >= 60) {
        this.m = 0
        this.h = this.h + 1 // 小时
      }
      this.str =
        this.toDub(this.h) +
        ':' +
        this.toDub(this.m) +
        ':' +
        this.toDub(this.s) +
        '' /* +this.toDubms(this.ms)+"毫秒" */
      // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
    },

    reset () {
      // 上传
      clearInterval(this.time)
      this.h = 0
      this.m = 0
      this.ms = 0
      this.s = 0
      this.str = '00:00:00'
      this.startStatus = true
      this.punchStatus = false

      this.$alert('时长上传成功！', '时长上传信息', {
        center: true,
        confirmButtonText: '确定',
        callback: action => {}
      })
    },

    start () {
      // 开始
      this.time = setInterval(this.timer, 50)
      this.startStatus = false
      if (!this.punchStatus) {
        this.startTime = new Date().toLocaleTimeString()
        this.punchStatus = true
      }
    },

    stop () {
      // 暂停
      clearInterval(this.time)
      this.startStatus = true
    },

    toDub (n) {
      // 补0操作
      if (n < 10) {
        return '0' + n
      } else {
        return '' + n
      }
    },

    toDubms (n) {
      // 给毫秒补0操作
      if (n < 10) {
        return '00' + n
      } else {
        return '0' + n
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
#mytime {
  display: block;
}
.wrapper {
  text-align: center;
  width: 60%;
  margin: 100px auto 0px auto;
  @include flex(space-around, center, column);
  button {
    margin-top: 30px;
  }
}
</style>

<style lang="scss">
.el-tag {
  font-size: 18px;
  margin-bottom: 20px;
}
.el-message-box {
  width: 280px;
}
</style>
