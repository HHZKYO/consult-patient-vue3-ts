<script setup lang="ts">
  const fn = () => {
    console.log('fn')
  }
</script>
<template>
  <div class="login-page">
    <CpNavBar @click-right="fn" title="登录" right-text="注册" />
    <h1>Login</h1>
    <van-button type="primary">登录</van-button>
  </div>
</template>

<style lang="scss" scoped></style>

