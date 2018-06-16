import Vue from 'vue'
import Book from './Book'

const app = new Vue(Book)
app.$mount()

// 这里设置下拉刷新
export default {
  config: {
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
}
