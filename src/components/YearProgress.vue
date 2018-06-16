<template>
  <div class="yearProgress">
    <!-- 只要是变量都得加冒号 -->
 <progress :percent="percent" color="#2d9aa1" />
<div><b class="imp">{{year}}</b>已经过去了<b class="imp">{{days}}</b>天,<b class="imp">{{percent}}%</b></div>
  </div>
</template>
<script>
export default {
  name: 'yearProgress',
  data() {
    return {
      time: null
    }
  },
  methods: {
    isLeapYear() {}
  },
  computed: {
    year() {
      return new Date().getFullYear()
    },
    days() {
      // 每年的元月一日
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // 今天的时间减去今年的时间戳
      let offset = new Date().getTime() - start.getTime()
      this.time = parseInt(offset / 1000 / 60 / 60 / 24) + 1
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent() {
      let nowYear = new Date().getFullYear()
      if (nowYear % 4) {
        return (this.days / 366 * 100).toFixed(2)
      } else {
        return (this.days / 365 * 100).toFixed(2)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styls/common.styl';

.yearProgress {
  width: 100%;
  font-size: 16px;
    text-align: center;
    margin-bottom:20rpx;
  progress {
    margin-bottom: 10px;
  }
  .imp {
    display:inline-block;
    color: $mycolor;
    font-weight:bold;
  }
}
</style>
