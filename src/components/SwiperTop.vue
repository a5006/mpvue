<template>
  <div class="swiper">
    <swiper
    indicator-dots=true
    indicator-color='#fff'
    indicator-active-color='#47b0b7'
    autoplay=true
    interval=5000
    duration=500
    circular=ture
    >
    <div v-for="(item, myindex) in imgUrls" :key="myindex">
      <swiper-item class="swiper-item">
        <div class="slide-image"  v-for="img in item" :key="img.id">
          <img  mode="aspectFit" :src="img.image"
          @click='bookDeatil(img)'
          ></img>
    <!-- <img mode='aspectFit'
    :src="item.image" alt=""> -->
    </div>
      </swiper-item>

    </div>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['tops'],
  computed: {
    // 如果通用清使用chunk函数，比如lodash的chunk方法
    imgUrls() {
      let res = this.tops
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6, 9)]
    }
  },
  methods: {
    bookDeatil(img) {
      console.log(img.id)
      wx.navigateTo({
        url: '/pages/detail/main?id=' + img.id
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper {
  margin-top: 5px;

  .swiper-item {
    display: flex;

    .slide-image {
      flex: 1;
    }

    img {
      width: 100%;
      height: 140px;
    }
  }
}
</style>
