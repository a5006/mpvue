import Vue from 'vue'
import App from './App'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['^pages/book/main'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#47B0B7',
      'navigationBarTitleText': '超级无聊的MPVUE项目',
      'navigationBarTextStyle': 'white'
    },
    'tabBar': {
      'selectedColor': '#47B0B7',
      'list': [{
        'pagePath': 'pages/book/main',
        'text': '图书',
        'iconPath': 'static/img/book.png',
        'selectedIconPath': 'static/img/book-active.png'
      },
      {
        'pagePath': 'pages/comments/main',
        'text': '评论',
        'iconPath': 'static/img/todo.png',
        'selectedIconPath': 'static/img/todo-active.png'
      },
      {
        'pagePath': 'pages/me/main',
        'text': '个人主页',
        'iconPath': 'static/img/me.png',
        'selectedIconPath': 'static/img/me-active.png'
      }
      ]

    }
  }
}
