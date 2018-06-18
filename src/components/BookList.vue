<template>
  <div class="book-card">
    <div class="thumb">
      <img @click="preview" :src="book.image" class="img" alt="" mode="aspectFit">
    </div>
    <a :href="detail">
    <div class="detail">
      <div class="row">
        <div class="right rate">
          {{book.rate}}
          <Rate :value="book.rate"></Rate>
        </div>
        <div class="left title">
          {{book.title}}
        </div>
      </div>
         <div class="row">
        <div class="right">
            浏览量:{{book.count}}
        </div>
        <div class="left elliplis_twoline author">
        {{book.author?book.author:'&nbsp'}}
        </div>
      </div>
         <div class="row">
        <div class="right">
         {{book.user_info.nickName}}
        </div>
        <div class="left elliplis publisher">
           {{book.publisher}}
        </div>
      </div>
    </div>
      </a>
  </div>

</template>
<script>
import Rate from '@/components/Rate'
// components 不是component
export default {
  components: { Rate },
  props: ['book'],
  created() {
    console.log(this.books)
  },
  methods: {
    preview() {
      wx.previewImage({
        current: this.book.image,
        // 点击预览显示多张图片，则需要下面这个
        urls: [this.book.image]
      })
    }
  },
  computed: {
    detail() {
      // 详情页跳转，main是入口文件
      return '/pages/detail/main?id=' + this.book.id
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styls/common.styl';

.book-card {
  padding: 5px;
  overflow: hidden;
  margin-top: 5px 0;
  font-size: $fz12;
  color: #515151;

  .thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;

    .img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .detail {
    margin-left: 10px;
    height:100px;

    .row {
      line-height: 20px;
      margin-bottom: 3px;

      .rate, .title {
        color: $mycolor;
        font-size: $fz14;
      }

      .elliplis_twoline {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .author, .publisher {
      width: 200px;
    }

    .elliplis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .right {
      float: right;
    }

    .left {
      margin-left: 80px;
    }
  }
}
</style>

