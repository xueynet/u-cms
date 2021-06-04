/**
 * Created by tuniao on 2020/1/2
 */
import {
  API_URL,
  TOKEN_NAME
} from '../config.js';

/**
 * 验证Token是否有效
 */
export function verifyToken() {
  var token = uni.getStorageSync(TOKEN_NAME); //取出在本地的token
  if (!token) {
    return getTokenFromServer(); //如果本地没有token则请求服务器进行获取
  } else {
    return _veirfyFromServer(token); //如果存在则请求服务器进行验证token是否有效
  }
}

/**
 * 从服务器中获取Token
 */
export function getTokenFromServer() {
  return new Promise((resolve, reject) => {
    uni.login({
      success: (res) => {
        uni.request({
          url: API_URL + 'token/get',
          method: 'POST',
          data: {
            code: res.code
          },
          success: (res) => {
            uni.setStorageSync(TOKEN_NAME, res.data.token); //将Token存放在本地
            resolve(res.data.token);
          }
        })
      }
    })
  })
}

/**
 * 从服务器进行验证Token
 * params：
 * token 待验证的Token
 * callback 回调函数
 */
function _veirfyFromServer(token) {
  return new Promise((reslove, reject) => {
    uni.request({
      url: API_URL + 'token/verify',
      method: 'POST',
      data: {
        token: token
      },
      success: async (res) => {
        var valid = res.data.result;
        if (!valid) {
          await getTokenFromServer(); //如果验证失败，重新获取Token
        }
        reslove()
      }
    })
  })
}
