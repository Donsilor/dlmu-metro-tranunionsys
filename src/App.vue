<template>
  <div id="app" v-title data-title="“无人小巴-地铁”新型网约服务智能调度平台">
    <!-- <layout :options="{ width: '100%', height: 720 }"> -->
    <!--    <keep-alive>-->
    <router-view />
    <!--    </keep-alive>-->
    <!-- </layout> -->
  </div>
</template>

<script>
// import Layout from "./layout/layout";

export default {
  name: "App",
  components: {
    // Layout,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
.domain {
  display: none;
}

.tick line {
  stroke: #c0c0bb;
}

.tick text {
  fill: #8e8883;
  font-size: 12pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.label {
  fill: #5c5c5c;
  font-size: 15pt;
  font-family: "Fira Code", "Source Han Sans CN";
  font-weight: bold;
}

.dateLabel {
  fill: #5c5c5c;
  display: table-cell;
  font-size: 60pt;
  font-weight: bold;
  font-family: "Fira Code", "Source Han Sans CN";
}

.dateLabelRed {
  fill: #a72e2e;
  display: table-cell;
  font-size: 90pt;
  font-weight: bold;
  font-family: "Fira Code", "Source Han Sans CN";
}

.days {
  fill: #5c5c5c;
  font-weight: bold;
  font-size: 55pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.topLabel {
  fill: #5c5c5c;
  font-weight: bold;
  font-size: 40pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.top {
  fill: #5c5c5c;
  font-weight: bold;
  font-size: 62pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.value {
  fill: #8a2e2e;
  font-size: 20pt;
  font-weight: 400;
  font-family: "Fira Code", "Source Han Sans CN";
}

.barInfo {
  fill: #ffffff;
  font-weight: 800;
  font-size: 24pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.axis-label {
  fill: #635f5d;
  font-size: 32pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.days {
  fill: r#5C5C5C;
  font-weight: bold;
  font-size: 40pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.dayslabel {
  fill: #5c5c5c;
  font-weight: bold;
  font-size: 25pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

.growth {
  fill: #5c5c5c;
  font-weight: bold;
  font-size: 40pt;
  font-family: "Fira Code", "Source Han Sans CN";
}

/* MIKU色 */
.L {
  fill: #39c5bb;
}

/* 龙牙绿 */
.M {
  fill: #006666;
}

.L {
  fill: #66ccff;
}

.N {
  fill: #eb0000;
}

.O {
  fill: #009714;
}

.P {
  fill: #b11111;
}

.Q {
  fill: #e24000;
}

.R {
  fill: #8605d1;
}

.S {
  fill: #00a5bb;
}

.T {
  fill: #c21178;
}

.U {
  fill: #00a048;
}

.W {
  fill: #ffc012;
}

.V {
  fill: #f39303;
}

.X {
  fill: #933dda;
}

.Y {
  fill: #ee5677;
}

.Z {
  fill: #c0620b;
}

.H {
  fill: #787878;
}

.G {
  fill: #cb1b45;
}

.K {
  fill: #0775be;
}

.J {
  fill: #b49d33;
}

.I {
  fill: #1b813e;
}

.F {
  fill: #dd3287;
}

.E {
  fill: #00af89;
}

.D {
  fill: #0f2540;
}

.C {
  fill: #2ea9df;
}

.B {
  fill: #0a83e6;
}

.A {
  fill: #cf9237;
}
.el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.8) !important;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
  color: #7bd8ff;
}

.el-select-dropdown {
  border: 1px solid #178ee0 !important;
  .el-scrollbar {
    background: rgba(23, 142, 224, 0.9) !important;
    .el-select-dropdown__item {
      color: #fff !important;
      &.selected {
        color: #8228f7 !important;
        background: none !important;
        font-weight: 700;
      }
      &:hover,
      &.hover {
        background: rgba(48, 166, 255) !important ;
      }
    }
  }
  .popper__arrow::after {
    border-bottom-color: rgba(23, 142, 224, 0.9) !important;
  }
}
</style>
