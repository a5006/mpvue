<template>
<div class="rate">
<div class="hide">⭐⭐⭐⭐⭐</div>
    <div class="show" :style="style">⭐⭐⭐⭐⭐</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '0'
    }
  },
  computed: {
    style() {
      return `width: ${this.value * 10}%`
    }
  }
}
</script>
<style lang="stylus" scoped>
.rate {
  position: relative;
  font-size: 8px;
  display:inline-block;
  vertical-align:top;
  .hide {
    visibility: hidden;
  }
  .show {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>
