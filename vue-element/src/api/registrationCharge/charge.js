import request from '@/utils/request'

/**
 * 收费（包括检查检验项目、处置项目、药品等收费项目）
 *
 * @param checkoutJson 收费信息，json 字符串
 * @return 操作结果
 * checkoutJson 字符串中的属性包括：
 * - entryType: charge_entry: 0, prescription_entry: 1
 * - entryId    收费条目或处方条目的编号
 */
export function checkout(query) {
  console.log('checkout')
  console.log(query)
  return request({
    url: '/charge/checkout',
    method: 'get',
    params: query,
    baseURL: 'http://localhost:8081/cloud-hospital/',
    contentType: 'application/x-wwww-form-urlencoded'
  })
}

/**
 * 退费（包括检查检验项目、处置项目、药品等收费项目）
 *
 * @param refundJson 退费信息，json 字符串
 * @return 操作结果
 * refundJson 字符串中的属性包括：
 * - entryType: charge_entry: 0, prescription_entry: 1
 * - entryId    收费条目或处方条目的编号
 * - refundNums 退费数量
 */
export function refund(query) {
  console.log('refund')
  console.log(query)
  return request({
    url: '/charge/refund',
    method: 'get',
    params: query,
    baseURL: 'http://localhost:8081/cloud-hospital/',
    contentType: 'application/x-wwww-form-urlencoded'
  })
}

/**
 * 退号
 *
 * @param Integer registrationId
 * @return
 */
export function withdrawRegistration(query) {
  console.log('withdrawRegistration')
  console.log(query)
  return request({
    url: '/charge/withdraw_registration',
    method: 'get',
    params: query,
    baseURL: 'http://localhost:8081/cloud-hospital/',
    contentType: 'application/x-wwww-form-urlencoded'
  })
}
