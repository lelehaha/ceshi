<template>
  <div class="content">
    <div class="content-left">
      <div class="left-top"  :style="{ background: 'url(' + kong + ')' }"></div>
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
  </div>
</template>

<script>
import kong from "./image/kong.png";
export default {
  data() {
    return {
      kong,
    }
  }
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
</style>
