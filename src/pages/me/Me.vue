<template>
 <div class="container">
   <div class="userinfo" >
     <img :src="userinfo.avatarUrl" alt="">
     <p>{{userinfo.nickName}}</p>
   </div>
  <YearProgress></YearProgress>
  <button class="btn" v-if="!userinfo.openId" lang="zh_CN" open-type="getUserInfo" @getuserinfo="login">登陆</button>
  <button @click="scanBook" class='btn' v-show="userinfo.openId">添加图书</button>
 </div>
</template>
<script>
import { showSuccess, showModal, post } from '@/util'
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
import YearProgress from '@/components/YearProgress'
export default {
  components: { YearProgress },
  data() {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/doge.png',
        nickName: 'doge'
      }
    }
  },
  methods: {
    login() {
      const session = qcloud.Session.get()
      if (session) {
        qcloud.setLoginUrl(config.loginUrl)
        // 第二次登录
        // 或者本地已经有登录态
        // 可使用本函数更新登录态
        qcloud.loginWithCode({
          success: res => {
            this.userinfo = wx.getStorageSync('userinfo')
            showSuccess('登录成功')
          },
          fail: err => {
            showModal('登录错误', err.message)
          }
        })
      } else {
        // 首次登录
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: res => {
            wx.setStorageSync('userinfo', res)
            this.userinfo = wx.getStorageSync('userinfo')
            showSuccess('登录成功')
          },
          fail: err => {
            showModal('登录错误', err.message)
          }
        })
      }
    },
    // isbn 图书的isbn
    async addBook(isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openId: this.userinfo.openId
      })
      if (res.code === 0 && res.data.title) {
        showSuccess(`${res.data.title}添加成功`)
      }
    },
    scanBook() {
      wx.scanCode({
        success: res => {
          if (res.result) {
            this.addBook(res.result)
          }
        }
      })
    }
  },
  created() {},
  onShow() {
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>
<style lang='stylus' scoped>
.container {
  padding: 0 30px;

  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    margin-bottom: 40rpx;

    img {
      width: 150rpx;
      height: 150rpx;
      border-radius: 50%;
      margin: 20rpx;
    }
  }
}
</style>

