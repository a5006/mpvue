<template>
  <div class="content">
    <BookList v-for="book in books" :key="book.id" :book="book"></BookList>
    <p class="text-bottom" v-if="!more">没有更多数据</p>
  </div>
</template>
<script>
import { get } from '@/util'
import BookList from '@/components/BookList'
export default {
  components: {
    BookList
  },
  data() {
    return {
      books: [],
      page: 0,
      more: true
    }
  },
  methods: {
    // 分页效果
    // init，是否为第一页
    async getList(init = false) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const book = await get('/weapp/booklist', { page: this.page })
      if (book.code === 0) {
        const moreBooks = book.data.list
        if (moreBooks.length < 10 && this.page > 0) {
          this.more = false
        }
        console.log(this.books, this.page)
        if (init) {
          wx.stopPullDownRefresh()
          this.books = book.data.list
        } else {
          this.books = this.books.concat(moreBooks)
          // 下拉刷新不能覆盖Books,而是累加
        }
      }
      wx.hideNavigationBarLoading()
    }
  },
  mounted() {
    this.getList(true)
  },
  onPullDownRefresh() {
    this.getList(true)
  },
  onReachBottom() {
    // 如果还有更多数据
    if (this.more) {
      this.page = this.page + 1
      wx.showNavigationBarLoading()
      this.getList()
      wx.hideNavigationBarLoading()
    }
    return false
  }
}
</script>
<style>
</style>
