<template>
  <div style="height: 100%">
    <el-container>
      <el-header 
        ><span class="header-save">新建项目<i class="el-icon-plus"></i></span>
        <span class="header-export">保存 <i class="el-icon-document"></i></span>
        <span class="header-export"
          >导入 <i class="el-icon-folder-opened"></i
        ></span>
        <span class="header-export"
          >导出 <i class="el-icon-position"></i
        ></span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li class="meun-li" tabindex="0" @click="navActive">
              模型绘制<i style="margin-left: 50%" :class="iconClass"></i>
            </li>
            <p
              class="nav-two"
              tabindex="0"
              v-if="nav"
              @click="routerPush('1-1')"
            >
              自动生成模型
            </p>
            <p
              class="nav-two"
              tabindex="0"
              v-if="nav"
              @click="routerPush('1-2')"
            >
              手动生成模型
            </p>
            <li class="meun-li" tabindex="0" @click="navActivee">
              模型绘制2<i style="margin-left: 50%" :class="iconClasss"></i>
            </li>
            <p
              class="nav-two"
              tabindex="0"
              v-if="navv"
              @click="routerPush('1-3')"
            >
              自动生成模型
            </p>
            <p
              class="nav-two"
              tabindex="0"
              v-if="navv"
              @click="routerPush('1-4')"
            >
              手动生成模型
            </p>
            <li class="meun-li" tabindex="0" @click="routerPush('2')">
              影响分析
            </li>
            <li class="meun-li" tabindex="0" @click="routerPush('3')">
              序列生成
            </li>
            <li class="meun-li" tabindex="0" @click="routerPush('4')">
              数据生成
            </li>
          </ul>
        </el-aside>
        <el-main>
          <iframe
            width="100%"
            scrolling="auto"
            height="100%"
            :src="routerTarget"
          ></iframe
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  data() {
    return {
      router,
      routerTarget: "/view",
      nav: false,
      navv: false,
      iconClass: "el-icon-arrow-down",
      iconClasss: "el-icon-arrow-down",
    };
  },
  methods: {
    // 二级导航
    navActive() {
      this.nav = !this.nav;
      if (this.nav) {
        this.iconClass = "el-icon-arrow-up";
      } else {
        this.iconClass = "el-icon-arrow-down";
      }
    },
    navActivee() {
      this.navv = !this.navv;
      if (this.navv) {
        this.iconClasss = "el-icon-arrow-up";
      } else {
        this.iconClasss = "el-icon-arrow-down";
      }
    },
    routerPush(val) {
      if(val === '1-1') {
        this.routerTarget = "/oneone";
      } else if(val === '1-2') {
        this.routerTarget = "/onetwo";
      }else if(val === '1-3') {
        this.routerTarget = "/onethree";
      }else if(val === '1-4') {
        this.routerTarget = "/onefour";
      }else if (val === "2") {
        this.routerTarget = "/home";
      } else if (val === "3") {
        this.routerTarget = "/two";
      } else if(val === '4') {
        this.routerTarget = "/three";
      }
    },
  },
};
</script>

<style less="lang" scoped>
.el-container .el-header {
  padding: 0;
  height: 24px !important;
  background: #d3d3d3;
  font-size: 12px;
  line-height: 24px;
}
.header-save {
  margin-left: 20px;
  padding: 2px 4px;
  cursor: pointer;
}
.header-save:hover {
  background-color: #c4c4c5;
}
.header-export {
  margin-left: 10px;
  padding: 2px 4px;
  cursor: pointer;
}
.header-export:hover {
  background-color: #c4c4c5;
}
.el-container {
  height: 100%;
}
.el-main {
  overflow: hidden;
  padding: 0;
}
.el-aside {
  background-color: #545c64;
}
.el-aside ul {
  color: #fff;
  padding: 0;
}
.el-aside li {
  line-height: 40px;
  list-style: none;
  cursor: pointer;
  padding-left: 20px;
}
.meun-li:focus {
  color: rgb(230, 230, 135);
}
.meun-li:hover {
  background-color: #303133;
}
.nav-two {
  line-height: 40px;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  padding-left: 30px;
}
.nav-two:focus {
  color: rgb(230, 230, 135);
}
.nav-two:hover {
  background-color: #303133;
}
iframe {
  border: none;
}
</style>
