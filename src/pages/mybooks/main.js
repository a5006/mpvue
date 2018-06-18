import Vue from 'vue'
import Mybooks from './Mybooks'

const app = new Vue(Mybooks)
app.$mount()
export default {
  'window': {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#47B0B7',
    'navigationBarTitleText': '我的图书',
    'navigationBarTextStyle': 'white'
  },
  config: {
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  }
}
