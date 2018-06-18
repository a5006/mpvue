<template>
<div class="container">
  <BookInfo :info="bookInfo"></BookInfo>
  <Comments :list="commentList" v-if="commentList.length"></Comments>
    <textarea v-model="comment" v-if="showAdd"
  class="textarea"
  :maxlength="100"
  placeholder="请输入对书的评价"
  ></textarea>
  <div v-else="showAdd" class="showAdd">
    未登录或者已评论
  </div>
<div class="switch">
  <div class="location">
    地理位置：
    <switch  class="checkbox" @change='getLoc' :checked="location" color="#47b0b7" ></switch>
    <span>{{location}} </span>
  </div>
  <div class="phone">
    手机型号：
     <switch class="checkbox"  @change='getPhone' :checked="phone" color="#47b0b7" ></switch>
   <span>{{phone}}</span>
  </div>
</div>
<button class="btn" @click ='addComment' v-if="showAdd"> 评论</button>
</div>
</template>
<script>
import { get, post, showSuccess } from '@/util'
import BookInfo from '@/components/BookInfo'
import Comments from '@/components/Comments'
export default {
  components: {
    BookInfo,
    Comments
  },
  data() {
    return {
      bookid: '',
      bookInfo: {},
      comment: '',
      location: '',
      phone: '',
      userinfo: {},
      commentList: []
    }
  },
  methods: {
    async getComment() {
      // 获取评论列表
      const comments = await get('/weapp/commentList', { bookid: this.bookid })
      this.commentList = comments.data.list || []
    },
    // 添加评论
    async addComment() {
      // 评论内容 手机型号 地理位置 图书ID 用户openId 时间
      const data = {
        comment: this.comment,
        phone: this.phone,
        location: this.location,
        bookid: this.bookid,
        openid: this.userinfo.openId,
        time: this.getNow()
      }
      try {
        const res = await post('/weapp/comment', data)
        showSuccess(res.data.msg)
        console.log(res, 'res')
        this.comment = ''
        this.getComment()
      } catch (e) {
        console.log(e)
      }
    },
    // 时间函数
    getNow() {
      const d = new Date()
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      let day = d.getDate()
      let hour = d.getHours()
      let min = d.getMinutes()
      let arr = this.dateFormate([month, day, hour, min])
      let time = `${year}-${arr[0]}-${arr[1]} ${arr[2]}:${arr[3]}`
      return time
    },
    dateFormate(arr) {
      return arr.map(t => {
        return String(t).length < 2 ? '0' + t : t
      })
    },
    async getDetail() {
      // 马上发起ajax，把访问的页面id 告诉后端，后端count加1
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      this.bookInfo = info.data
      wx.setNavigationBarTitle({
        title: this.bookInfo.title
      })
    },
    getLoc(e) {
      const ak = '0on2oKYncPoWpd7XLEfjGQaMvf7EFm9n'
      const url = 'http://api.map.baidu.com/geocoder/v2/'
      const that = this
      if (e.target.value) {
        wx.getLocation({
          success(geo) {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longtitude}`,
                output: 'json'
              },
              success(res) {
                if (res.data.status === 0) {
                  that.location = res.data.result.addressComponent.city
                } else {
                  that.location = '外太空'
                }
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone(e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    },
    onShareAppMessage: function(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题'
      }
    }
  },
  mounted() {
    // mpvue写法，获取page onLoad 时候传递的 options
    this.bookid = this.$root.$mp.query.id
    // 每次进入页面都触发count累加方法
    this.getDetail()
    this.getComment()
    this.getNow()
    const userinfo = wx.getStorageSync('userinfo')
    // this.openid = openid
    this.userinfo = userinfo
    // 评论重置
    this.comment = ''
  },
  computed: {
    showAdd() {
      // 如果没登陆
      console.log(this.commentList)
      if (!this.userinfo.openId) {
        return false
      }
      // 评论里有自己的openID
      if (
        this.commentList.filter(v => v.openid === this.userinfo.openId).length
      ) {
        return false
      }
      return true
    }
  },
  onShareAppMessage(res) {
    console.log(res.target)
    return {
      title: this.bookInfo.title
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styls/common.styl';

.container {
  font-size: $fz12;

  .textarea {
    margin: 0 auto;
    width: 94%;
    height: 50px;
    background: #fafafa;
    color: #222;
  }

  .switch {
    margin: 10px auto;
    width: 94%;

    span {
      color: $mycolor;
    }

    .phone {
      margin-top: 4px;
    }
  }

  .btn {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .showAdd {
    color: #515151;
    width: 94%;
    margin: 0 auto;
    font-size: 10px;
  }
}
</style>
