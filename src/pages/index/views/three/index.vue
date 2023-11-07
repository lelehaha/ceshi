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
          <div style="height: 90px; overflow: auto">
            <table
              border="1"
              style="border-collapse: collapse; margin-left: 30px"
            >
              <colgroup>
                <col style="width: 50px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th rowspan="2" colspan="1">序号</th>
                  <th rowspan="2" colspan="1">回归测试序列</th>
                  <th rowspan="1" colspan="2">回归测试数据</th>
                </tr>
                <tr>
                  <th>数据部分</th>
                  <th>操作部分</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>[6,10,11,12,13,15]</td>
                  <td>pyMethod=’inStore’ unitPrice=5 flowRate=2 rAmount=20</td>
                  <td>选择grade</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>[6,10,18]</td>
                  <td>pyMethod=’inStore’</td>
                  <td>选择grade 点击取消加油</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>[6,17]</td>
                  <td>pyMethod=’inStore’</td>
                  <td>点击取消加油</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>[1,2,3,7,9,17]</td>
                  <td>pyMethod=’credit’ rewards=0 fillup=false</td>
                  <td>插入有效支付卡; 放回加油枪;</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>[1,2,3,7,9,10,18]</td>
                  <td>pyMethod=’credit’; rewards=0 ；fillup=false</td>
                  <td>插入有效支付卡; 选择grade; 放回加油枪</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>[1,2,5,7,9,10,11,14,15]</td>
                  <td>
                    pyMethod=’credit’ rewards=1；fillup=false
                    unitPrice=5;flowRate=2 rAmount=9 pyMethod=’inStore’
                  </td>
                  <td>插入有效支付卡； 选择grade</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>[1,2,3,7,9,10,11,12,12,12,13,16]</td>
                  <td>
                    pyMethod=’credit’ rewards=0;fillup=false
                    unitPrice=5;flowRate=2 rAmount=40
                  </td>
                  <td>插入有效支付卡 选择grade</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>[6,10,11,13,16]</td>
                  <td>
                    pyMethod=’inStore’ unitPrice=5;flowRate=2 rAmount=10
                    pyMethod=’credit’
                  </td>
                  <td>选择grade</td>
                </tr>
              </tbody>
            </table>
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
      <div class="right-right">
        历史测试数据：<br />
        <table style="border-collapse: collapse">
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
      <div style="font-size: 12px">
        目标测试序列：<br />
        <textarea></textarea>
      </div>
      <div class="right-ycsf" style="font-size: 12px; margin-bottom: 10px">
        遗传算法参数：<br />
        <table style="border-collapse: collapse" border="1">
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

.left-table td,
th {
  font-style: normal;
  font-weight: normal;
  text-align: center;
}
</style>
