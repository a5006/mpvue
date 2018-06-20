<template>
  <div  class="search_box" >
    <div class="text_box">
  <input class="text" placeholder-style="color:#fff;text-align:center;opacity:.5" type="text" v-model="text"  placeholder="请输入搜索的图书名" @click="showData">
    <span class="del" @click="del" v-show="text">X</span>
    </div>
    <div class="search"  @click="showData">
      <img class="img" src="../../static/img/search.png" alt="">
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
  position: relative;
    padding: 4px 20px;



  .text_box {
    background:#fff;
       border-radius :5px;
       padding: 2px 10px;


    .text {
      color: #47B0B7;
      font-size: $fz14;
margin-right:30px;
      width:250px;
    }

    .del {
      color: #47B0B7;
      font-size: 14px;
      position: absolute;
      right: 18%;
      top: 28%;
      height:14px;
      line-height :14px;
      margin: auto;
      opacity: 0.5;
    }
  }

  .search {
margin-left :10px;
    font-size: 14px;
    color: #47B0B7;
    border: 1px solid #47B0B7;
    border: none;
    height: 30px;
    display: block;
    background: none;

    .img {
      width: 30px;
      height: 30px;
      padding:5px;
      box-sizing :border-box;
      border-radius: 50%;
    }
  }
}
</style>
