<template>
  <div class="border-bar">
    <dv-border-box-9
      backgroundColor=" rgba(0, 44, 99, 0.7)"
      class="dv-border-box-13"
    >
      <div class="border-bar-title">
        <span class="zh">{{ data }}</span>
        <!-- <div class="line"></div> -->
      </div>
      <slot></slot>
    </dv-border-box-9>
  </div>
</template>
    
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
};
</script>
    
<style lang="less" scoped>
.border-bar {
  .border-bar-title {
    position: relative;
    text-align: center;
    top: 1.5rem;
    .zh {
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .line {
      width: 3rem;
      height: 2px;
      background: #35e8fb;
    }
  }
}
</style>
    