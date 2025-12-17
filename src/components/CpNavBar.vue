<script setup lang="ts">
import { useRouter } from 'vue-router';

// import router from '@/router';

  const props = defineProps<{
    title?: string
    rightText?: string
    back?: () => void
  }>()

  // const emit = defineEmits(['click-right'])
  const emit = defineEmits<{
    (e: 'click-right'): void
  }>()

  // 点击右按钮
  const onClickRight = () => {
    emit('click-right')
  }

  // 点击左箭头
  const router = useRouter()
  const onClickLeft = () => {
    if(props.back) return props.back()
    if(history.state?.back) {
      router.back()
    } else {
      router.push('/')
    }
  }
</script>
<template>
  <van-nav-bar
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed :title="title"
    left-arrow
    :right-text="rightText"
  />
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
