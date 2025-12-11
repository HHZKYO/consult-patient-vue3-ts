<script setup lang="ts"></script>
<template>
  <van-nav-bar fixed title="登录" left-arrow right-text="注册" />
</template>
<style lang="scss" scoped>
  :deep() {
    .van-nav-bar {
      &__arrow {
        color:var(--cp-tex1);
        font-size: 18px;
      }
      &__title {
        font-size: 15px;
      }
    }
  }
</style>
