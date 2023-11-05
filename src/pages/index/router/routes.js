// 登陆页
function Land() {
  return import("../views/land");
}
// 导航
function Layout() {
  return import("../layout/index.vue");
}
// 刚进入页面
function View() {
  return import('../views/view.vue')
}
// 一一
function Oneone() {
  return import("../views/oneone/index.vue")
}
// 一二
function Onetwo() {
  return import("../views/onetwo/index.vue")
}
// 首
function Home() {
  return import("../views/home/index.vue")
}
// 二
function Two() {
  return import("../views/two/index.vue")
}
// 三
function Three() {
  return import('../views/three/index.vue')
}
// 图表
function Echarts() {
  return import("../views/echarts/index.vue")
}
export default [
  {
    name: "登陆",
    path: "/",
    component: Land,
  },
  {
    name: "首页",
    path: "/layout",
    component: Layout,
  },
  {
    name: "默认页",
    path: "/view",
    component: View,
  },
  {
    name: "一一",
    path: "/oneone",
    component: Oneone,
  },
  {
    name: "一二",
    path: "/onetwo",
    component: Onetwo,
  },
  {
    name: '首',
    path: '/home',
    component: Home,
  },
  {
    name: '二',
    path: '/two',
    component: Two,
  },
  {
    name: '三',
    path: '/three',
    component: Three,
  },
  {
    name: '图表',
    path: '/echarts',
    component: Echarts,
    children: [
      {
        path: '',
        component: Echarts,
        meta: {
          title: '23',
        }
      }
    ]
  }
];
