<script setup lang="ts">
import type { UserInfo } from '@/types/user';
import { ref } from 'vue';

const userInfo = ref<UserInfo>()
console.log(userInfo.value?.orderInfo.receivedNumber)
</script>

<template>
  <div class="user-page">
    user
  </div>
</template>

<style lang="scss" scoped></style>
