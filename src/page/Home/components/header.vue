<template>
  <div class="header">
    <img
      class="return"
      src="../../../../public/image/return01.png"
      @click="toback"
    />
    <div class="tab-left-text">
      综合交通运输智能技术与装备教育部工程研究中心/辽宁省综合交通运输大数据重点实验室
    </div>
    <div class="header-text">
      <div class="zh">
        “无人小巴<i class="el-icon-sort"></i>地铁” 新型网约服务智能调度平台
      </div>
    </div>
    <div class="home-icon">
      <img class="logo1" src="../../../../public/home/logo1.png" />
      <img class="logo4" src="../../../../public/home/logo4.png" />
      <img class="logo4" src="../../../../public/home/logo5.png" />
      <img class="logo2" src="../../../../public/home/logo2.png" />
      <img class="logo3" src="../../../../public/home/logo3.png" />
    </div>
    <div class="home-time">{{ date }}{{ time }}</div>
  </div>
</template>

<script>
export default {
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
    toback() {
      window.history.back();
    },
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
  position: relative;
  width: 100%;
  height: 10vh;
  background: url("../../../../public/image/标题背景.png") no-repeat center;
  background-size: 100% 100%;
  .tab-left-text {
    color: #fff;
    font-weight: bold;
    font-size: 2.3rem;
    position: absolute;
    left: 3.5%;
    top: 40%;
  }
  .header-text {
    text-align: center;
    padding-top: 1rem;
    .zh {
      font-size: 4.6rem;
      letter-spacing: 0.4rem;
      color: #fff;
      font-weight: bold;
    }
    .el-icon-sort {
      transform: rotate(90deg);
    }
  }
  .home-icon {
    position: absolute;
    top: 2rem;
    right: 10.5%;
    img {
      width: 7rem;
      margin-right: 2rem;
    }
    .logo1 {
      width: 7.5rem;
    }
    .logo2 {
      width: 7rem;
    }
  }
  .home-time {
    font-weight: bold;
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    position: absolute;
    top: 4rem;
    right: 1.5%;
  }
  .return {
    width: 3rem;
    position: absolute;
    left: 2rem;
    top: 4.3rem;
  }
}
</style>
