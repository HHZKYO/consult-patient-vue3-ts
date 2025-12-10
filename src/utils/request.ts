import axios from 'axios'
import { useUserStore } from '@/stores'
import { showToast } from 'vant'
import router from '@/router'
import type { AxiosError, Method } from 'axios'

const instance = axios.create({
  // 1. 基础地址，超时时间
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000
})

instance.interceptors.request.use(
  (config) => {
    // 携带token
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers!.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // 处理业务失败
    if (res.data.code !== 10000) {
      // 给出错误提示
      showToast(res.data.message || '业务失败')
      // 返回 错误的 Promise
      return Promise.reject(res.data)
    }
    // 摘取核心响应数据
    return res.data
  },
  (err: AxiosError) => {
    // 处理401错误
    if (err.response?.status === 401) {
      // 清楚本地用户信息
      const store = useUserStore()
      store.delUser()
      // 跳转到登录页面，并携带当前访问页面的路径（包含参数）
      router.push({
        path: '/login',
        query: {
          returnUrl: router.currentRoute.value.fullPath
        }
      })
    }
    return Promise.reject(err)
  }
)

export default instance
type Data<T> = {
  code: number
  message: string
  data: T
}

export const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: object
) => {
  return instance.request<unknown, Data<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
