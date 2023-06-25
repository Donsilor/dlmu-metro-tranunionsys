<template>
  <div class="header">
    <dv-decoration-10 class="left-line" style="width: 33%; height: 2rem" />
    <div class="tab tab-left">
      <div class="tab-left-text">
        辽宁省综合交通运输大数据重点实验室 /
        综合交通运输智能技术与装备教育部工程研究中心
      </div>
      <!-- <div class="tab-left-text">
        综合交通运输智能技术与装备教育部工程研究中心
      </div> -->
      <!-- <div class="tab-left-text">大连市多式联运智慧运营工程技术研究中心</div>  -->
    </div>
    <div class="header-text">
      <div class="zh">
        “无人小巴<i class="el-icon-sort"></i>地铁”新型网约服务智能调度平台
      </div>
      <dv-decoration-6 class="bottom-icon" style="width: 20rem; height: 2rem" />
    </div>
    <dv-decoration-10
      class="right-line"
      :color="['#178EE0']"
      style="width: 33%; height: 2rem; transform: rotateY(180deg)"
    />
    <dv-decoration-11 class="home-time" style="width: 10%; height: 6rem"
      ><div class="">{{ date }}{{ time }}</div></dv-decoration-11
    >
    <!-- <div class="back-btn" @click="$router.push({ path: '/home' })">
      <img src="~@/assets/back.png" />
      返回
    </div> -->
    <div v-if="big4" class="qiehuan-btn" @click="$router.push({ path: big4 })">
      <i class="el-icon-sort"></i>
      切换
    </div>
    <img class="hs-logo3" src="../../public/home/校徽.png" />
    <img class="hs-logo1" src="../../public/home/logo1.png" />
    <img class="hs-logo2" src="../../public/home/logo2.png" />
  </div>
</template>

<script>
export default {
  props: ["title", "big4"],
  data() {
    return {
      date: "",
      time: "",
    };
  },
  mounted() {
    this.getdate();
    this.timer = setInterval(() => {
      this.getdate();
    }, 3000);
  },
  methods: {
    getdate: function () {
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      this.getTime();
      this.date = year + "-" + month + "-" + day + " ";
    },
    getTime: function () {
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let time = new Date();
      let hour = time.getHours();
      let minutes = time.getMinutes();
      let week = weeks[time.getDay()];
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      this.time = hour + ":" + minutes + " " + week;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  .header-text {
    text-align: center;
    width: 40%;
    height: 17rem;
    margin: 0 auto;
    background: url("~@/assets/header-img.png") no-repeat center -1rem;
    background-size: 100% 100%;
    .zh {
      font-size: 5rem;
      letter-spacing: 0.4rem;
      color: #fff;
      font-weight: bold;
      position: relative;
      top: 1.3rem;
    }
    .bottom-icon {
      margin: 0 auto;
      position: relative;
      top: 2rem;
    }
  }
  .left-line {
    position: absolute;
    left: 2rem;
    top: 7.7rem;
  }
  .tab-left {
    position: absolute;
    left: 2%;
    top: 3%;
    .tab-left-text {
      color: #fff;
      font-weight: bold;
      font-size: 2.5rem;
    }
  }
  .tab li {
    list-style: none;
    float: left;
    padding: 10px;
    margin-left: 2rem;
    position: relative;
    color: white;
    z-index: 10;
    height: 3rem;
  }
  .tab::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .tab ul::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .tab li::after {
    border-radius: 3px;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-color: #09818d;
    -moz-transform: skewX(-25deg);
    -ms-transform: skewX(-25deg);
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }

  .right-line {
    position: absolute;
    top: 7.7rem;
    right: 2rem;
  }
  .home-time {
    font-weight: bold;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    position: absolute;
    top: 1.3rem;
    right: 8%;
  }
  .back-btn {
    color: #ffffff;
    font-size: 1.6rem;
    position: absolute;
    top: 2.7rem;
    left: 1%;
  }
  .back-btn:hover {
    cursor: pointer;
  }
  .back-btn img {
    width: 1.6rem;
    height: 1.6rem;
  }
  .qiehuan-btn {
    color: #ffffff;
    font-size: 1.6rem;
    position: absolute;
    top: 2.7rem;
    right: 1%;
  }
  .qiehuan-btn:hover {
    cursor: pointer;
  }
  .qiehuan-btn i {
    width: 1.6rem;
    height: 1.6rem;
  }
  .hs-logo1 {
    width: 10rem;
    position: absolute;
    top: 1rem;
    right: 21.2%;
  }
  .hs-logo2 {
    width: 9rem;
    position: absolute;
    top: 0.2rem;
    right: 19%;
  }
  .hs-logo3 {
    width: 6.5rem;
    position: absolute;
    top: 1.2rem;
    right: 24%;
  }
  .el-icon-sort {
    transform: rotate(90deg);
  }
}
</style>
