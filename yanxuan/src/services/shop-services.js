



import HTTP from '../utils/http'
const _http = new HTTP()
class Move {
  detail (id) {
    return _http.request({
      type: 'post',
      url: 'shop/goods/detail',
      data: {
        id:id
      }
    })
  }
}
export default Move