<template>
  <div>1
    <!-- <t-tabs v-model="defaultValue" @change="tabChange">
      <t-tab-panel value="1" label="选项一">
        <div id="echarts" style="width: 700px; height: 500px"></div>
      </t-tab-panel>
      <t-tab-panel value="2" label="选项二">
        <div id="echartss" style="width: 700px; height: 500px"></div>
      </t-tab-panel>
      <t-tab-panel value="3" label="选项三">
        <div id="echartsss" style="width: 700px; height: 500px"></div>
      </t-tab-panel>
    </t-tabs> -->
  </div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      defaultValue: "1",
      options: {
        tooltip: {},
        legend: {
          data: ["水量", "油量"],
        },
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          name: "每日/千克",
          axisLine: {
            show: true,
          },
        },
        series: [
          {
            name: "水量",
            type: "bar",
            itemStyle: {
              color: "#91cc75",
            },
            barGap: "0%", // 控制同一类目下柱条间隔
            data: [20, 23, 12, 34, 25, 23, 26],
            barWidth: "30%",
          },
          {
            name: "油量",
            type: "bar",
            data: [24, 32, 10, 32, 22, 29, 18],
            barWidth: "30%",
          },
        ],
      },
      optionsBzt: {
        series: [
            {
                type: 'pie',
                data: [200,340],
                radius:['40%', '70%'],
                label: {
                    show: false,
                }
            }
        ]
      },
    };
  },
  // mounted() {
  //   this.initEcharts();
  // },
  methods: {
    // 初始化图表
    initEcharts() {
      this.$nextTick(function () {
        if (this.defaultValue === "1") {
          let myChart = echarts.init(document.getElementById("echarts"));
          myChart.setOption(this.options);
        } else if (this.defaultValue === "2") {
            let myChart = echarts.init(document.getElementById('echartss'));
            myChart.setOption(this.optionsBzt);
        }
      });
    },
    // 选项卡改变
    tabChange(val) {
      this.defaultValue = val;
      this.initEcharts();
    },
  },
};
</script>
<style lang="less" scoped>

</style>
