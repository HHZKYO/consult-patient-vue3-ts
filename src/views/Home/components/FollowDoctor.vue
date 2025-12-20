<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DoctorCard from './DoctorCard.vue';
import { useWindowSize } from '@vueuse/core'
import type { DoctorList } from '@/types/consult';
import { getDoctorPageAPI } from '@/services/consult';

const { width } = useWindowSize()

const list = ref<DoctorList>([])
const getDoctorPage = async () => {
  const res = await getDoctorPageAPI({current: 1, pageSize: 5})
  list.value.push(...res.data.rows)
}
onMounted(() => {
  getDoctorPage()
})

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
        <van-swipe-item v-for="item in list" :key="item.id">
          <doctor-card :item="item"></doctor-card>
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
