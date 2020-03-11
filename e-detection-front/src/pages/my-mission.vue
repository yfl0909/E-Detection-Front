<template>
  <div class="index">
    <div class="container">
      <nav-header :navName="navName" />

      <div class="mission-container">
        <el-table :data="tableData" style="width: 100%" max-height="500">
          <el-table-column fixed prop="date" label="任务日期" width="105"></el-table-column>
          <el-table-column prop="name" label="姓名" width="80"></el-table-column>
          <el-table-column prop="mission" label="任务" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="50">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      navName: '我的任务',
      tableData: [
        {
          date: '2020-03-01',
          name: '王小虎',
          mission: '精确测量并上报'
        },
        {
          date: '2020-03-02',
          name: '王小虎',
          mission: '精确测量并上报'
        },
        {
          date: '2020-03-03',
          name: '王小虎',
          mission: '精确测量并上报'
        },
        {
          date: '2020-03-04',
          name: '王小虎',
          mission: '精确测量并上报'
        },
        {
          date: '2020-03-05',
          name: '王小虎',
          mission: '精确测量并上报'
        },
        {
          date: '2020-03-06',
          name: '王小虎',
          mission: '精确测量并上报'
        }
      ]
    }
  },
  components: {
    NavHeader,
    NavFooter
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.mission-container {
  margin-top: 10px;
}
</style>

<style lang="scss">
</style>
