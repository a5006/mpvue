<template>
  <div class="container">
    <div class="container_box" v-if="userinfo.openId" >
  <Comments :list="commentList" type="comments"></Comments>
  <div class="title">我的图书</div>
  <BookList  v-for="book in books" :key="book.id" :book="book"></BookList>
    </div>
    <div class="info" v-else>先登陆呗</div>
  </div>
</template>
<script>
import Comments from '@/components/Comments'
import BookList from '@/components/BookList'
import { get } from '@/util'
export default {
  data() {
    return {
      commentList: [],
      userinfo: {},
      books: []
    }
  },
  components: {
    Comments,
    BookList
  },
  methods: {
    init() {
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getComments() {
      console.log(this.userinfo.openId)
      const commentList = await get('/weapp/commentList', {
        openid: this.userinfo.openId
      })
      this.commentList = commentList.data.list
      console.log(commentList)
    },
    async getBooks() {
      const books = await get('/weapp/booklist', {
        openid: this.userinfo.openId
      })
      this.books = books.data.list
      console.log(books, 'books')
    }
  },
  onShow() {
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        console.log(this.userinfo)
        this.init()
      }
    }
  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading()
    this.init()
    wx.stopPullDownRefresh()
    wx.hideNavigationBarLoading()
  }
}
</script>
<style>
.title,
.info {
  width: 94%;
  margin: 0 auto;
  color: #515151;
  font-size: 12px;
}
</style>
