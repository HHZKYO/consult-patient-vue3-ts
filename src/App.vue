<script setup lang="ts">
// import { Button } from 'vant'
import { useUserStore } from './stores'
import { request } from './utils/request'

const getMessage = () => {
  // axios.request({
  //   url: '/patient/myUser',
  //   method: 'get'
  // })
  request('/patient/myUser', 'get', { test: 1 })
}
const login = () => {
  // axios
  // .request({
  //   url: '/login/password',
  //   method: 'post',
  //   data: {
  //     mobile: '13212345678',
  //     password: 'abc123456'
  //   }
  // })
  request('/login/password', 'post', {
    mobile: '13212345678',
    password: 'abc12345'
  })
    .then((res) => {
      console.log('成功', res)
    })
    .catch((err) => {
      console.log('失败', err)
    })
}
const store = useUserStore()
</script>

<template>
  <div>
    app
    <div>{{ store.user }}</div>
    <van-button
      type="primary"
      @click="
        store.setUser({
          token: '1',
          id: '1',
          mobile: '1',
          account: '1',
          avatar: '1'
        })
      "
      >设置</van-button
    >
    <van-button type="primary" @click="store.delUser()">删除</van-button>
    <van-button @click="getMessage()">获取用户信息</van-button>
    <van-button @click="login()">用户登录</van-button>
  </div>
</template>

<style scoped></style>
