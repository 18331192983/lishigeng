



import HTTP from '../utils/http'
const _http = new HTTP()
class Move {
  specialTwo (id) {
    return _http.request({
      url: `cms/news/detail?id=${id}`,
    })
  }
  classifyTwo (id) {
    return _http.request({
      url: `shop/goods/list`,
    })
  }
}
export default Move