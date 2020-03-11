<template>
  <div class="container">
    <nav-header :navName="navName" />
    <div class="settings">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">识别模式</div>
        </el-col>
        <el-col :span="6" :offset="12">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setRecognition" trigger="click">
              <span class="el-dropdown-link">
                {{ recognition }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="简单识别">简单识别</el-dropdown-item>
                <el-dropdown-item command="双重识别">双重识别</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">验证模式</div>
        </el-col>
        <el-col :span="6" :offset="12">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setVerify" trigger="click">
              <span class="el-dropdown-link">
                {{ verify }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="人脸验证">人脸验证</el-dropdown-item>
                <el-dropdown-item command="身份验证">身份验证</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">人证比对</div>
        </el-col>
        <el-col :span="4" :offset="14">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setCompare" trigger="click">
              <span class="el-dropdown-link">
                {{ compare }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="关闭">关闭</el-dropdown-item>
                <el-dropdown-item command="打开">打开</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">识别等级</div>
        </el-col>
        <el-col :span="6" :offset="12">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setLevel" trigger="click">
              <span class="el-dropdown-link">
                {{ level }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="正常识别">正常识别</el-dropdown-item>
                <el-dropdown-item command="精密识别">精密识别</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">识别距离</div>
        </el-col>
        <el-col :span="5" :offset="13">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setDistance" trigger="click">
              <span class="el-dropdown-link">
                {{ distance }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1.0米">1.0米 </el-dropdown-item>
                <el-dropdown-item command="2.0米">2.0米 </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">识别间隔</div>
        </el-col>
        <el-col :span="4" :offset="14">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setSpace" trigger="click">
              <span class="el-dropdown-link">
                {{ space }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="2秒">2秒</el-dropdown-item>
                <el-dropdown-item command="1秒">1秒</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">口罩检测</div>
        </el-col>
        <el-col :span="5" :offset="13">
          <div class="grid-content bg-purple-light">
            <el-switch @click="changeMaskStatus" v-model="maskStatus"></el-switch>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">体温监测</div>
        </el-col>
        <el-col :span="10" :offset="8">
          <div class="grid-content bg-purple-light">
            <el-dropdown @command="setTemp" trigger="click">
              <span class="el-dropdown-link">
                {{ temp }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="报警不允许通行">报警不允许通行</el-dropdown-item>
                <el-dropdown-item command="报警但允许通行">报警但允许通行</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/nav-header'
import NavFooter from '../components/nav-footer'

export default {
  data () {
    return {
      navName: '设备设置',
      recognition: '简单识别',
      verify: '人脸验证',
      compare: '关闭',
      level: '正常识别',
      distance: '1.0米',
      space: '2秒',
      temp: '报警不允许通行',
      maskStatus: true
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    changeMaskStatus () {
      this.maskStatus = !this.maskStatus
    },
    setRecognition (command) {
      this.recognition = command
    },
    setVerify (command) {
      this.verify = command
    },
    setCompare (command) {
      this.compare = command
    },
    setLevel (command) {
      this.level = command
    },
    setDistance (command) {
      this.distance = command
    },
    setSpace (command) {
      this.space = command
    },
    setTemp (command) {
      this.temp = command
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
</style>

<style lang="scss">
.settings {
  margin: auto;
  width: 90%;
  .el-row {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #efefef;
    .el-col {
      .bg-purple-light {
        float: right;
      }
    }
  }
}
</style>
