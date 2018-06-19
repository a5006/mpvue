<template>
  <div  class="search_box" >
    <div class="text_box">
  <input class="text" placeholder-style="color:#fff;text-align:center;opacity:.5" type="text" v-model="text"  placeholder="请输入搜索的图书名" @click="showData">
    <span class="del" @click="del" v-show="text">X</span>
    </div>
    <div class="search"  @click="showData">
      <img class="img" src="../../static/img/doge.png" alt="">
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    del() {
      this.text = ''
      console.log('del')
      this.$emit('ievent', this.text)
    },
    showData() {
      this.$emit('ievent', this.text)
    }
  },
  computed: {
    changeColor() {}
  }
}
</script>
<style lang="stylus" scoped>
@import '~styls/common.styl';

.search_box {
  display: flex;
  background: #47B0B7;
  padding: 0 80px;
  position: relative;
  padding-bottom :4px;

  .text_box {
    overflow :hidden;
    flex: 9;
    border-bottom: 1px solid #fafafa;

    .text {
      color: #fff;
      font-size: $fz12;
      flex: 9;
      text-align: center;
      width:90%;
      float:left;
    }

    .del {
      color: #fff;
      font-size: 12px;
      position: absolute;
      right: 31%;
      top: 0;
      bottom: 0;
      height:10px;
      line-height :10px;
      margin: auto;
      opacity: 0.5;
    }
  }

  .search {
    font-size: 10px;
    color: #fff;
    flex: 1;
    border: 1px solid #47B0B7;
    border: none;
    height: 30px;
    display: block;
    background: none;

    .img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
}
</style>
