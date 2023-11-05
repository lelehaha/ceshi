<template>
  <div class="content">
    <div class="content-left">
      <div
        v-if="imgShow"
        class="left-top"
        :style="{ background: 'url(' + kong + ')' }"
      ></div>
      <div
        v-else
        class="left-top"
        :style="{ background: 'url(' + qian + ')' }"
      ></div>
      <div class="left-bottom">
        <div style="padding: 8px; background-color: #d3cece; font-size: 12px">
          测试用例 <i class="el-icon-caret-right"></i>
        </div>
        <div class="left-table">
          <p>运行结果：</p>
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
        <el-form-item label="原型名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="模型输入">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="index" label="" width="100px">
            </el-table-column>
            <el-table-column prop="state" label="源状态" width="100px">
            </el-table-column>
            <el-table-column prop="target" label="源目标" width="100px">
            </el-table-column>
            <el-table-column prop="describe" label="迁移上变量描述">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumbit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import kong from "../image/kong.png";
import qian from "../image/qian.png";
export default {
  data() {
    return {
      kong,
      qian,
      imgShow: true,
      dialogVisible: true,
      formData: { name: "" },
      tableData: [
        {
          index: "初始状态",
          state: "0",
          target: "0",
          describe: "[]",
        },
        {
          index: "1",
          state: "0",
          target: "1",
          describe: "[['cb', 0, 0],['sb', 0, 1]...",
        },
        {
          index: "2",
          state: "1",
          target: "1",
          describe: "[['p',0,0],['attmpts',1...",
        },
        {
          index: "3",
          state: "2",
          target: "-1",
          describe: "[]",
        },
      ],
    };
  },
  methods: {
    sumbit() {
      this.dialogVisible = false;
      this.imgShow = false;
    },
  },
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
  height: 80%;
  background-size: 100% 100% !important;
}
.left-bottom {
  width: 100%;
  height: 20%;
}
.left-table {
  margin-top: -5px;
  height: 100%;
  background: #fff;
  font-size: 12px;
}
.content-right {
  width: 20%;
  height: inherit;
  background-color: #fff;
}
</style>
