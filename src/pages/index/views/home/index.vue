<template>
  <div class="content">
    <div class="content-left">
      <div class="left-top" :style="{ background: 'url(' + kong + ')' }"></div>
      <div class="left-bottom">
        <div style="padding: 8px; background-color: #d3cece; font-size: 12px">
          测试用例 <i class="el-icon-caret-right"></i>
        </div>
        <div class="left-table">
          <p>运行结果：</p>
          <div v-if="jieShow">
            直接影响(Affected DD)：(11, 12pAmount), (11, 13,pAmount),(11, 14, pAmount), (11, 15, pAmount)<br>
            直接影响(Affecting CD)：(2,17), (6, 17), (10，18)<br>
            间接影响(Activation DD)：[11, (7,12,rAmount)],[11,(7,13, rAmount)]<br>
            间接影响(Activation CD)：[17, (10,11)], [17, (10,18)],[18,(11,12)],[18,(11,13)],[18,(11,14)],[18,(11,15)],[18,(11,16)]<br>
            间接影响(Activation GDD)：[11, (1,12,pAmount)], [11, (1,13,pAmount)],[11,(1,14,pAmount)],[11,(1,15,pAmount)]<br>
            间接影响(Activation GCD)：[11,(1,12)],[17,(2,11)],[17,(2,12)],[17,(2,13)],[17,(2,14)],[17,(2,15)],[17,(2,16)],[17,(6,11)],[17,(6,12)],[17,(6,13)],[17,(6,14)],[17,(6,15)],[17,(6,16)],[18,(2,12)],[18,(2,13)],[18,(2,14)],[18,(2,15)],[18,(2,16)],[18,(6,12)],[18,(6,13)],[18,(6,14)],[18(6,15)],[18,(6,16)]
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div style="padding: 8px; background-color: #d3cece; font-size: 12px">
        属性 <i class="el-icon-caret-right"></i>
        <i class="el-icon-ice-cream-square"></i>
        <i class="el-icon-close"></i>
      </div>
    </div>
    <el-dialog title="EFSM模型" :visible.sync="dialogVisible" width="60%">
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="基本变更">
          <el-table :data="tableData" style="width: 100%" height="250px">
            <el-table-column prop="index" label="项目" align="center">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
      <div class="btn" style="width: 100%;margin-left: 210px;">
        <el-button>从文件载入基本变更</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit"
          >下一步</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import kong from "../image/kong.png";
import hou from "../image/hou.png";
export default {
  data() {
    return {
      kong,
      hou,
      jieShow: false,
      dialogVisible: true,
      formData: { name: "" },
      tableData: [
        { index: "1 [20,21]" },
        { index: "2 [10,18]" },
        { index: "3 [14,15,17,19]" },
        { index: "4 [21,10,13,23]" },
        { index: "5 [14,15,17,19]" },
        { index: "6 [14,15,17,19]" },
        { index: "7 [14,15,17,19]" },
        { index: "8 [14,15,17,19]" },
        { index: "9 [14,15,17,19]" },
        { index: "10 [14,15,17,19]" },
      ],
    };
  },
  methods: {
    submit() {
      this.dialogVisible = false;
      this.jieShow = true;
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100%;
}

.content-left {
  width: 80%;
  height: inherit;
}
.left-top {
  width: 100%;
  height: 76%;
  background-size: 100% 100% !important;
}
.left-bottom {
  width: 100%;
  height: 24%;
}
.left-table {
  margin-top: -5px;
  height: 100%;
  background: #fff;
  font-size: 12px;
}
.left-table p {
  margin-bottom: 0;
}
.content-right {
  width: 20%;
  height: inherit;
  background-color: #fff;
}
.btn .el-button {
  padding: 12px 120px;
}
</style>
