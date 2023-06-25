<template>
  <div class="wrap">
    <div id="container"></div>
    <div id="tips" style="display: none">
      <div class="row">
        <div>车速</div>
        <!--        <div>加速度</div>-->
        <!--        <div>方向度</div>-->
      </div>
      <div class="row">
        <div id="speed"></div>
        <!--        <div id="ms2"></div>-->
        <!--        <div id="angle"></div>-->
      </div>
    </div>
    <!--    <div id="tips">-->
    <!--      <div class="row"><div>&nbsp;&nbsp;车速:</div><div id="speed"></div></div>-->
    <!--&lt;!&ndash;      <div class="row"><div>&nbsp;&nbsp;加速度:</div><div id="ms2"></div></div>&ndash;&gt;-->
    <!--&lt;!&ndash;      <div class="row"><div>&nbsp;&nbsp;方向度:</div><div id="angle"></div></div>&ndash;&gt;-->
    <!--    </div>-->
  </div>
</template>

<script>
import { sportsData } from "../../../../public/SportsData";

export default {
  mounted() {
    this.AMap = window.AMap;
    this.initMap();
  },
  beforeDestroy() {
    this.map && this.map.destroy();
  },
  data() {
    return {
      map: null,
      marker: null,
      i: 0,
      lineArr: [
        [121.534346, 38.867144],
        [121.533536, 38.867355],
        [121.532957, 38.867476],
        [121.530666, 38.868687],
        [121.529717, 38.867539],
        [121.529137, 38.867251],
        [121.529073, 38.867175],
        [121.527185, 38.867969],
        [121.526815, 38.867731],
        [121.526047, 38.866612],
        [121.524535, 38.867514],
        [121.52535, 38.868454],
        [121.52616, 38.868809],
        [121.526133, 38.87065],
        [121.526777, 38.870684],
        [121.527501, 38.870567],
        [121.529422, 38.869377],
        [121.532769, 38.867543],
        [121.533193, 38.867418],
        [121.534335, 38.86715],
        [121.535151, 38.868153],
        [121.535226, 38.868316],
        [121.535296, 38.868312],
        [121.535376, 38.868358],
        [121.535328, 38.868454],
        [121.53543, 38.868554],
        [121.535467, 38.868616],
        [121.535392, 38.86875],
        [121.535323, 38.869999],
        [121.535119, 38.870007],
        [121.535129, 38.869189],
        [121.535306, 38.868629],
        [121.535424, 38.868541],
        [121.535328, 38.868445],
        [121.535226, 38.868441],
        [121.535188, 38.868387],
        [121.535221, 38.868316],
        [121.535167, 38.868182],
        [121.534346, 38.867144],
      ],
      point: null,
      AMap: null,
      oldTime: null,
    };
  },
  methods: {
    initMap() {
      let _this = this;
      this.map = new this.AMap.Map("container", {
        resizeEnable: true,
        viewMode: "3D", //是否为3D地图模式
        center: [121.530687, 38.867595],
        zoom: 16,
      });

      this.marker = new this.AMap.Marker({
        map: this.map,
        position: [121.534346, 38.867144],
        icon: "https://webapi.amap.com/images/car.png",
        // icon: require("../../../../public/car.png"),
        offset: new this.AMap.Pixel(-26, -15),
        autoRotation: true,
        angle: -90,
      });

      // 绘制轨迹
      let polyline = new this.AMap.Polyline({
        map: this.map,
        path: this.lineArr,
        showDir: true,
        strokeColor: "#28F", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      let passedPolyline = new this.AMap.Polyline({
        map: this.map,
        // path: this.lineArr,
        strokeColor: "#AF5", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      this.marker.on("moving", function (e) {
        // passedPolyline.setPath(e.passedPath);
        _this.point = e.passedPath[e.passedPath.length - 1];
        _this.drawLayer();
      });

      // 开始运动
      function start() {
        _this.marker.moveAlong(
          _this.lineArr,
          200,
          function (k) {
            return k;
          },
          true
        );
      }

      start();
    },

    drawLayer() {
      if (this.point == null) {
        this.point = this.lineArr[0];
      }
      var center = this.map.lnglatTocontainer(this.point);
      const tips = document.getElementById("tips");
      tips.setAttribute(
        "style",
        "display: block; top: " +
          (center.y + 100) +
          "px;left: " +
          center.x +
          "px;"
      );
      // console.log(center);

      if (!this.oldTime) {
        this.oldTime = new Date().getTime();
      } else {
        if (new Date().getTime() - this.oldTime < 1000) {
          return;
        }
        this.oldTime = new Date().getTime();
      }

      // const ms2Div = document.getElementById("ms2");
      // ms2Div.innerText = (Math.random() / 4).toFixed(2);
      const speedDiv = document.getElementById("speed");
      speedDiv.innerText = (Math.random() * 5 + 21).toFixed(2);
      // const angleDiv = document.getElementById("angle");
      // angleDiv.innerText = Math.floor(Math.random() * 30) + 10;
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 96%;
  height: 100%;
}

#container {
  width: 100%;
  height: 100%;
}

#tips {
  position: absolute;
  top: 0;
  background-color: #284fa2;
  border-radius: 10px;
  text-align: center;
  z-index: 100;
}

#tips:before {
  content: " ";
  position: absolute;
  left: 50%;
  bottom: -10px;
  display: block;
  width: 15px;
  height: 15px;
  background: #284fa2;
  transform: rotate(45deg) translateX(-50%);
  z-index: -1;
}

#tips .row {
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 17px;
  color: white;
  line-height: 3rem;
  font-weight: bold;
}

#tips .row:nth-of-type(2) {
  width: 95%;
  border-radius: 5px;
  margin: 0 auto 0.5rem;
  background-color: white;
  font-size: 19px;
  color: #284fa2;
  font-weight: bold;
}

#tips .row div {
  width: 66px;
  flex: 1;
  text-align: center;
}
</style>
