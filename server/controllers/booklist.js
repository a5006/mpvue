const {
  mysql
} = require('../qcloud')

module.exports = async (ctx) => {
  const {
    page
  } = ctx.request.query
  // 这个query就是附带的条件
  const size = 10
  const books = await mysql('books')
    .select('books.*', 'csessioninfo.user_info')
    .join('csessioninfo', 'books.openid', 'csessioninfo.open_id')
    .offset(Number(page) * size)
    .limit(size)
    .orderBy('books.id', 'desc')
  // limit 限制条数
  // offset 起点
  // oderby 排序
  ctx.state.data = {
    // books 是获取到的书的数据列表，根据上面的操作，多获取了一个user_info
    // user_info是JSON格式，所以要转换,赋值给info
    // info对象里面里面的数据我们只需要一个nickName，同时把nickName合并到books的每一项书信息里面
    // 所以通过Object.assign 深复制，
    // 为了不影响原本数据，所以第一个参数为空对象，第二个，第三个分别为合并的内容
    // 最后得出的内容包括 每一项书的数据和nickName
    list: books.map(v => {
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
