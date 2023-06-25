<template>
  <div class="page">
    <Header />
    <div class="page-content">
      <div class="page-left">
        <div>
          <div class="title">
            <img src="../../../public/image/小标题装饰.png" />
            <span>微循环服务在线监测与评估</span
            ><img src="../../../public/image/小标题装饰2.png" />
          </div>
          <Map class="map" />
        </div>
      </div>
      <div class="page-right">
        <div class="page-right-top">
          <div class="left">
            <div class="title">
              <img src="../../../public/image/小标题装饰.png" />
              <span>全栈式智慧运营与服务决策技术</span
              ><img src="../../../public/image/小标题装饰2.png" />
            </div>
            <div class="content-bottom">
              <div class="top">
                <div>
                  <img src="../../../public/E区/0即时需求生成.jpg" />
                  <p>即时需求生成</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
                <div>
                  <img src="../../../public/E区/1服务路线规划.png" />
                  <p>服务路线规划</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
                <div>
                  <img src="../../../public/E区/2需求在线匹配.png" />
                  <p>需求在线匹配</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
                <div>
                  <video
                    muted="muted"
                    src="../../../public/E区/3环境数据采集.mp4"
                    poster="~@/assets/earth-bg.jpeg"
                    autoplay="autoplay"
                    controls="controls"
                    loop="loop"
                  ></video>
                  <p>环境数据采集</p>
                  <img
                    class="jiantou jiantou4"
                    src="../../../public/image/箭头.png"
                  />
                </div>
              </div>
              <div class="bottom">
                <div>
                  <img src="../../../public/E区/7清分对账结算.png" />
                  <p>清分对账结算</p>
                  <img
                    class="jiantou jiantou4"
                    src="../../../public/image/箭头.png"
                  />
                </div>
                <div>
                  <video
                    muted="muted"
                    src="../../../public/E区/6自主运营控制.mp4"
                    poster="~@/assets/earth-bg.jpeg"
                    autoplay="autoplay"
                    controls="controls"
                    loop="loop"
                  ></video>
                  <p>自主运营控制</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
                <div>
                  <video
                    muted="muted"
                    src="../../../public/E区/5全息状态感知.mp4"
                    poster="~@/assets/earth-bg.jpeg"
                    autoplay="autoplay"
                    controls="controls"
                    loop="loop"
                  ></video>
                  <p>全息状态感知</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
                <div>
                  <img src="../../../public/E区/4高精地图构建.jpg" />
                  <p>高精地图构建</p>
                  <img class="jiantou" src="../../../public/image/箭头.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="title">
              <img src="../../../public/image/小标题装饰.png" />
              <span>L4级自动驾驶小巴及核心组件</span
              ><img src="../../../public/image/小标题装饰2.png" />
            </div>
            <img class="img" src="../../../public/image/无人驾驶汽车2.png" />
          </div>
        </div>
        <div class="page-right-bottom">
          <div class="title">
            <img src="../../../public/image/小标题装饰.png" />
            <span>数据驱动的新型服务系统设计</span
            ><img src="../../../public/image/小标题装饰2.png" />
          </div>
          <div class="list">
            <div v-for="(item, index) in videoList" :key="item">
              <p>{{ item }}</p>
              <video
                muted="muted"
                :src="`https://cyrt.oss-cn-beijing.aliyuncs.com/dlmu/d0${
                  index + 1
                }.mp4`"
                autoplay="autoplay"
                controls="controls"
                loop="loop"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import BorderBar from "./components/border-bar";
import Map from "./components/map";

export default {
  components: {
    Header,
    BorderBar,
    Map,
  },
  data() {
    return {
      videoList: [
        "职住识别",
        "出行预测",
        "OD溯源",
        "强吸引点",
        "路口诊治",
        "公交走廊",
      ],
      imgList: [
        "即时需求生成",
        "服务路线规划",
        "供需在线匹配",
        "环境数据采集",
        "高精地图构建",
        "全息状态感知",
        "自主运营控制",
        "清分对账结算",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("~@/assets/earth-bg.jpeg") no-repeat center center;
  background-size: cover;
  .page-content {
    display: flex;
    margin: 1rem 2rem;
    .page-left {
      width: 30vw;
      height: calc(100vh - 13vh);
      margin-right: 1rem;
      & > div {
        width: 100%;
        height: 100%;
        background: url("../../../public/image/背景1.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        .map {
          flex: 1;
          padding: 2rem 2.2rem;
        }
      }
    }
    .page-right {
      flex: 1;
      height: calc(100vh - 13vh);
      display: flex;
      flex-direction: column;
      &-top {
        height: 54vh;
        display: flex;
        margin-bottom: 2rem;
        .left {
          flex: 2;
          background: url("../../../public/image/背景2.png") no-repeat;
          background-size: 100% 100%;
          margin-right: 1rem;
          .content-bottom {
            padding: 1rem 2rem;
            position: relative;
            left: 0.7rem;
            top: 0.5rem;
            .top,
            .bottom {
              display: flex;
              & > div {
                width: 25%;
                height: 21vh;
                margin-right: 2rem;
                margin-bottom: 2rem;
                position: relative;
                p {
                  text-align: center;
                  font-size: 2rem;
                  font-weight: bold;
                  position: absolute;
                  bottom: -2rem;
                  left: 1px;
                  height: 4rem;
                  line-height: 4rem;
                  width: 100%;
                  background-color: rgba(0, 0, 0, 0.7);
                  color: #fff;
                }
                .jiantou {
                  width: 4rem;
                  height: 3rem;
                  position: absolute;
                  right: -4rem;
                  top: 45%;
                  z-index: 100;
                  border: none;
                  &.jiantou4 {
                    transform: rotate(90deg);
                    top: 102%;
                    left: 45%;
                  }
                }
              }
            }
            .bottom {
              .jiantou {
                left: -3.8rem;
                transform: rotate(180deg);
                &.jiantou4 {
                  transform: rotate(-90deg) !important;
                  top: -3rem !important;
                }
              }
            }
            img,
            video {
              width: 100%;
              height: 100%;
              border: 1px solid #eee;
            }
          }
        }
        .right {
          flex: 1;
          background: url("../../../public/image/背景04.png") no-repeat;
          background-size: 100% 100%;
          text-align: center;
          .img {
            width: 90%;
            height: 80%;
            margin-top: 3rem;
          }
        }
      }
      &-bottom {
        height: 50vh;
        width: 100%;
        height: 100%;
        background: url("../../../public/image/背景3.png") no-repeat;
        background-size: 100% 100%;
        .list {
          display: flex;
          padding: 2rem 3rem;
          justify-content: space-around;
          & > div {
            margin-right: 2rem;
            width: 20%;
            height: 24vh;
            position: relative;

            p {
              text-align: center;
              font-size: 2rem;
              font-weight: bold;
              position: absolute;
              bottom: -2rem;
              left: 1px;
              height: 4rem;
              line-height: 4rem;
              width: 100%;
              background-color: rgba(0, 0, 0, 0.7);
              color: #fff;
            }
          }
          video {
            width: 100%;
            height: 100%;
            border: 1px solid #eee;
          }
        }
      }
    }
  }
  video {
    object-fit: fill;
  }
  .title {
    text-align: center;
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    margin-top: 1rem;
    span {
      margin: 0 2rem;
    }
  }
}
</style>
