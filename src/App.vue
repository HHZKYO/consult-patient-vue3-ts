<script setup lang="ts">
// import { Button } from 'vant'
import { useUserStore } from './stores'
import axios from './utils/request'

const getMessage = () => {
  axios.request({
    url: '/patient/myUser',
    method: 'get'
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
  </div>
</template>

<style scoped></style>
