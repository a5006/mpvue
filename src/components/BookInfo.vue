<template>
  <div class="bookinfo">
    <div class="thumb">
  <img class="back" mode="aspectFill" :src="info.image" alt="">
       <img class="img" mode="aspectFit" :src="info.image" alt="">
       <div class="title_info">
       <p class="title">《 {{info.title}} 》</p>
       <p class="author">{{info.author}}</p>
       </div>
    </div>
    <div class="subTitle_info">
    <div class="owner">
      <img class="img" :src="userInfo.image" alt="">
   {{userInfo.nickName}}
  <div class="right">
   <span class="rate">{{info.rate}}</span>    <Rate :value="info.rate"></Rate>
  </div>
</div>
<div class="detail">
  {{info.publisher}}
  <div class="right price">
    ￥{{info.price}}
  </div>
</div>
  </div>
<div class="tags">
  <div class="tags_badge" :key='tag' v-for='tag in info.tags'>
    {{tag}}
  </div>
</div>
<div class="summary">
  <div class="summary_badge" :key='index' v-for='(item, index) in info.summary'>
    {{item}}
  </div>
</div>
  </div>

</template>
<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: ['info'],
  computed: {
    userInfo() {
      // 这里要这么写是因为数据是ajax获取的，可能刚进页面，数据还是为空，所以页面就会报错
      // 为了防止，则要这么写，个人猜测
      return this.info.user_info || {}
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styls/common.styl';

.bookinfo {
  font-size: $fz14;

  .thumb {
    overflow: hidden;
    width: 750rpx;
    position: relative;
    background: #000;

    .back {
      // filter:blur(5px)
      display: block;
      width: 100%;
      opacity: 0.5;
    }

    .img, .title_info {
      position: absolute;
      left: 0;
      right: 0;
      top: -30px;
      margin: auto;
      width: 200rpx;
      color: #fff;
    }

    .title_info {
      top: 170px;
      width: 100%;
      text-align: center;
      font-size: 16px;

      .author {
        font-size: 14px;
      }
    }
  }

  .subTitle_info {
    padding: 6px 10px;

    .right {
      float: right;
      line-height: 20px;
      height: 20px;
    }

    .rate {
      margin-right: 10px;
      color: $mycolor;
    }

    .price {
      color: $yellow;
      font-size: $fz16;
    }

    .img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .tags {
    margin-left: 5px;

    .tags_badge {
      display: inline-block;
      word-break: break-all;
      border: 1px solid $mycolor;
      border-radius: 4px;
      color: $mycolor;
      margin: 4px;
      padding: 2px;
    }
  }

  .summary {
    padding: 6px 10px;
    text-indent: 2em;
    font-size: $fz12;
    color: #515151;
  }
}
</style>
