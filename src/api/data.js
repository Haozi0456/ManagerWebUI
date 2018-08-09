import http from '../libs/api.request'
import api from './api'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

// 获取今日收入统计
export const getStatisticsByDay = (data) => {

  return http.post(api.service.getStatisticsByDay, data)
}
// 获取今日订单统计
export const getStatisticsOrdersByDay = (data) => {

  return http.post(api.service.getStatisticsOrdersByDay, data)
}

// 获取今日收入统计
export const getMemberCount = () => {
  return http.post(api.service.getMemberCount, '')
}
