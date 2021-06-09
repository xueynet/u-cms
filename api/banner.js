import { request } from '@/utils/request'

// export function getBannerData(data) {
//   return request({
//     url: "banner/" + data.banner_pos + "/" + data.limit,
//     method: 'get'
//   })
// }

export function getBannerData(data) {
  return request({
    url: "channels/" + data.banner_pos + "/" + data.limit,
    method: 'get'
  })
}
