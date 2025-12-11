<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <!-- 一级路由出口 -->
     <RouterLink to="/login">登录</RouterLink>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
