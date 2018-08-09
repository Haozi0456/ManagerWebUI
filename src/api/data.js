import http from '../libs/api.request'
import api from './api'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

// 获取今日收入统计
export const getStatisticsByDay = () => {
  let date = new Date().format('yyyy-MM-dd')
  let data = {
    day: date,
    status: 1
  }
  return http.post(api.service.getStatisticsByDay, data)
}
