<template>
  <div class="content">
    <div class="content-left">
      <div class="left-top" :style="{ background: 'url(' + hou + ')' }"></div>
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
      <div class="right-right">
        历史测试数据：<br />
        <table style="border-collapse:collapse;">
          <tr>
            <th>编号</th>
            <th>历史测试序列</th>
            <th>历史测试数据</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>11</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </table>
      </div>
      <div style="font-size:12px">
        目标测试序列：<br>
        <textarea></textarea>
    </div>
    <div class="right-ycsf" style="font-size:12px;margin-bottom: 10px">
        遗传算法参数：<br>
        <table style="border-collapse:collapse;" border="1">
          <tr>
            <td>初始种群规模</td>
            <td>120</td>
            <td>变异概率</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>迁移率</td>
            <td>0.2</td>
            <td>迭代次数</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>交叉概率</td>
            <td>1</td>
            <td>迁移间隔</td>
            <td>3</td>
          </tr>
        </table>
    </div>
    </div>
  </div>
</template>

<script>
import hou from "../image/hou.png";
export default {
  data() {
    return {
      hou,
    };
  },
};
</script>

<style less="lang" scoped>
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
.right-right {
  font-size: 12px;
  margin-bottom: 10px;
}
.right-right table th {
  padding: 2px 10px;
  line-height: 20px;
  border: 1px solid #000;
}
.right-right table td {
  padding: 2px 10px;
  line-height: 20px;
  border: 1px solid #000;
}
.right-ycsf td {
  padding: 2px 10px;
  line-height: 20px;
  border: 1px solid #000;
}
</style>
