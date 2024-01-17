
import Request from '../utils/request';



/**
 * 获取手机验证码
 * @param {mobile, businessType} data
 */
export const getCode = data => Request({
  url: `/v1/login/captcha/${data.mobile}`,
  method: 'POST',
  data,
  requestType: true
})

/**
 * 拿用户信息
 */
export const getOpenid = data => Request({
  url: '/api/currentTime',
  method: 'GET',
  data,
})
