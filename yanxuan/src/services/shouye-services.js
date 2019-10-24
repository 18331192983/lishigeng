// 第二个文件: M层
// M： 数据
// V：视图
// C： 业务逻辑层

import HTTP from '../utils/http'
const _http = new HTTP()
class Shouye{
  banner () {
    return _http.request({
      url:"banner/list"
    })
  }
  bargin () {
    return _http.request({
      url:"shop/goods/kanjia/list"
    })
  }
  article () {
    return _http.request({
      url:"cms/news/list"
    })
  }
  recommend () {
    return _http.request({
      url:"shop/goods/list"
    })
  }
  classify () {
    return _http.request({
      type: 'post',
      url:"shop/goods/category/all"
    })
  }
  // 登录接口
  login (obj) {
    return _http.request({
      type: 'post',
      url: "user/m/login?deviceId=007&deviceName=monkey",
      data: {
        mobile: obj.mobile,
        pwd: obj.pwd
      }
    })
  }
  // 手机验证码接口
  shouji (obj) {
    console.log(obj)
    return _http.request({
      type: 'post',
      url: "verification/sms/get",
      data: {
        mobile:obj.mobile,
        key: obj.key,
        picCode: obj.picCode
      }
    })
  }
  //注册
  zhuce (obj) {
    return _http.request({
      type: 'post',
      url: "user/m/register",
      data: {
        mobile: obj.mobile,
        pwd:obj.pwd,
        code: obj.code
      }
    })
  }
}

export default Shouye