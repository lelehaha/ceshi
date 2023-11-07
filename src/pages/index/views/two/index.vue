<template>
  <div class="content">
    <div class="content-left">
      <div class="left-top"  :style="{ background: 'url(' + hou + ')' }"></div>
      <div class="left-bottom">
        <div style="padding: 8px; background-color: #d3cece; font-size: 12px">
          测试用例 <i class="el-icon-caret-right"></i>
        </div>
        <div class="left-table">
          <p>运行结果：</p>
          <div v-if="jieShow">
            [[6,10,11,12,13,15],[6,10,18],[6,17],[1,2,3,7,9,17],[1,2,3,7,9,10,18],[1,<br>
            2,5,7,9,10,11,14,15],[1,2,3,7,9,10,11,12,12,12,13,16],[6,10,11,13,16]
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
    <el-dialog title="测试义务" :visible.sync="visible" width="60%">
      <span style="font-weight: bold">测试义务输入</span
      >（保留方括号，示例：['v'，5，9]）
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item>
          <el-table :data="tableData" style="width: 100%" height="250px">
            <el-table-column prop="obj" label="项目" width="400px">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
      <div style="width: 100%;margin-left: 150px;">
        <el-button>从文件载入义务测试</el-button>
        <el-button>添加测试义务</el-button>
        <el-button>删除选中义务测试</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="submitOne">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog title="遗传算法初始化" :visible.sync="visibleTwo" width="50%">
      <el-form ref="form" :model="formDataTwo" label-width="154px">
        <el-form-item label="遗传参数设置">
          <el-input v-model="formDataTwo.name"></el-input>
        </el-form-item>
        <el-form-item
          label="初始种群设置（输入时保留方括号，示例：[1,3,5,6,7]）"
        >
          <el-table :data="tableDataTwo" style="width: 100%" height="250px">
            <el-table-column prop="obj" label="项目" width="400px">
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
      <div style="width: 100%;margin-left: 90px;">
        <el-button>从文件载入初始种群</el-button>
        <el-button>添加个体</el-button>
        <el-button>删除选中个体</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="sumbitTwo">确 认</el-button>
      </span></el-dialog
    >
  </div>
</template>

<script>
import hou from '../image/hou.png'
export default {
  data() {
    return {
      hou,
      visible: true,
      visibleTwo: false,
      jieShow: false,
      formData: { name: "" },
      formDataTwo: { name: "" },
      tableData: [
        { obj: "['',14,11]" },
        { obj: "['',20,-14,-11]" },
        { obj: "['',14,12]" },
        { obj: "['',17,11]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
        { obj: "['',21,-15,-13]" },
      ],
      tableDataTwo: [
        { obj: "1 [1,2,2,2,4]" },
        { obj: "2 [1,5,6,7,3]" },
        { obj: "3 [1,5,6,12,7,3]" },
        { obj: "4 [1,2,4,6,8]" },
        { obj: "5 [1,4,4,6]" },
        { obj: "6 [1,3,15,4,2,2]" },
        { obj: "7 [1,5,6,12,7,3]" },
        { obj: "8 [1,5,6,12,7,3]" },
        { obj: "9 [1,5,6,12,7,3]" },
        { obj: "10 [1,5,6,12,7,3]" },
        { obj: "11 [1,5,6,12,7,3]" },
        { obj: "12 [1,5,6,12,7,3]" },
        { obj: "13 [1,5,6,12,7,3]" },
        { obj: "14 [1,5,6,12,7,3]" },
      ],
    };
  },
  methods: {
    // 重新填参数
    submitOne() {
      this.visible = false;
      this.visibleTwo = true;
    },
    // 下一步
    sumbitTwo() {
      this.visibleTwo = false;
      this.jieShow = true;
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
  // background-image: url('../../../../assets/weizhuang.jpg');
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
.left-table p{
  margin-bottom: 0;
}
.content-right {
  width: 20%;
  height: inherit;
  background-color: #fff;
}
</style>
