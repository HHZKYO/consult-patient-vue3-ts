<script setup lang="ts">
import DoctorCard from './DoctorCard.vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// 使用原生js来实现宽度适配
// import { onMounted, onUnmounted, ref } from 'vue';
// const width = ref(0)
// const setWidth = () => {
//   width.value = window.innerWidth
// }
// onMounted(() => {
//   setWidth()
//   window.addEventListener('resize', setWidth)
// })
// onUnmounted(() => {
//   window.removeEventListener('resize', setWidth)
// })
</script>

<template>
  <div class="follow-doctor">
    <div className="head">
      <p>推荐关注</p>
      <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
    </div>
    <div class="body">
      <!-- swipe 组件 -->
      <van-swipe
        :loop="false"
        :show-indicators="false"
        :width="( 150 / 375 ) * width"
      >
        <van-swipe-item v-for="i in 5" :key="i">
          <doctor-card></doctor-card>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.follow-doctor {
  background-color: var(--cp-bg);
  height: 250px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
    > a {
      color: var(--cp-tip);
    }
  }
  .body {
    width: 100%;
    overflow: hidden;
  }
}
</style>
