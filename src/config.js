const host = 'http://localhost:5757'
const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}
export default config

// 以后上线要修改，所以单独拿出来一份
