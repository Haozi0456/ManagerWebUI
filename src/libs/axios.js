import qs from 'qs'
import axios from 'axios'
// import store from '../store'
import {Message} from 'iview'
import helper from './httpHelper'
import { setToken, getToken } from './util'

let baseUrl = 'http://127.0.0.1:81/' // 设置你的baseUrl

const CancelToken = axios.CancelToken
const source = CancelToken.source()

// 设置token
function addToken () {
  let token = getToken()
  // let token = helper.local.get('token');
  if (token) {
    axios.defaults.headers.common['token'] = getToken()
  }
}

// 请求验证拦截器
axios.interceptors.request.use(config => {
  // store.commit('UPDATE_LOADING', true); // 显示loading,这里没有用vuex可以省去
  // 判断请求不是登陆接口的时候,字段是不是过期了,(根据业务逻辑做对应的处理)
  if (config.url.indexOf('login') < 0) {
    let lessTime = Number(helper.local.get('expireTime')) - Date.now() // 后台返回的过期时间与现在的进行计算
    if (lessTime <= 0) {
      Message.error({
        content: '登陆过期',
        duration: 2
      })
      // source.token('token过期了')
      // source.token()
      // store.commit('UPDATE_LOADING', false); // 隐藏loading
      // window.location.href = '/#/login';
      setToken('')
      helper.local.clear('expireTime')
      window.location.href = '/login'
    }
  }
  return config
})

// 返回数据拦截器
axios.interceptors.response.use(res => {
  if (res.config.url.indexOf('login') >= 0) {
    const {code, data} = res.data
    if (code === 100) {
      // 登陆后做出一些本地的处理，按需加载,()
      // ...................
      var date = new Date()
      // n代表天数,加号表示未来n天的此刻时间,减号表示过去n天的此刻时间
      // var expireTime = date.getTime() + 1000*60*60*24*n;
      var expireTime = date.getTime() + 1000 * 60 * 60 * 24 * 1
      // getTime()方法返回Date对象的毫秒数,但是这个毫秒数不再是Date类型了,而是number类型,所以需要重新转换为Date对象,方便格式化
      // var newDate= new Date(expireTime);
      helper.local.set('expireTime', expireTime) // 过期时间
      // helper.local.set('token', data.token);
      setToken(data.token)
    }
  }
  return res
})

// 封装请求方法
function formatReq (type, url, data) {
  addToken()
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: `${baseUrl}${url}`,
      headers: {
        // 这里的请求头与后台商量设置
        'content-Type': 'application/x-www-form-urlencoded'
      },
      cancelToken: source.token,
      data: qs.stringify(data) // java后台用qs转
      // data:JSON.stringify(data)//PHP后台用JSON转
    })
      .then(res => {
        // store.commit('UPDATE_LOADING', false); // 隐藏loading
        // 这里可以添加指定对应状态码的处理方式,比如登陆过期,res.data.code === '6666' 路由跳转到login
        resolve(res)
      })
      .catch(e => {
        // store.commit('UPDATE_LOADING', false); // 隐藏loading
        reject(e.message)
        Message.error(e.message)
      })
  })
}

function formatReqJson (type, url, data) {
  addToken()
  return new Promise((resolve, reject) => {
    axios({
      method: type,
      url: `${baseUrl}${url}`,
      headers: {'content-Type': 'application/json; charset=utf-8'},
      cancelToken: source.token,
      data: JSON.stringify(data) // 转成json字符串
    })
      .then(res => {
        // store.commit('UPDATE_LOADING', false); // 隐藏loading
        // 这里可以添加指定对应状态码的处理方式,比如登陆过期,res.data.code === '6666' 路由跳转到login
        reslove(res)
      })
      .catch(e => {
        // store.commit('UPDATE_LOADING', false); // 隐藏loading
        reject(e.message)
        Message.error(e.message)
      })
  })
}

const Http = {
  // get: (url, query) => {
  //   url = helper.formatUrl(url, query);
  //   setToken();
  //   return axios.get(`${baseUrl}${url}`, {cancelToken: source.token}).then(r => r);
  // },
  get (url, params) {
    addToken()
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}${url}`, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: (url, data) => formatReq('post', url, data),
  postJson: (url, data) => formatReqJson('post', url, data),
  put: (url, data) => formatReq('put', url, data),
  patch: (url, data) => formatReq('patch', url, data),
  delete: (url, data) => formatReq('delete', url, data)
}

export default Http
