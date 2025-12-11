<script setup lang="ts">
  defineProps<{
    title?: string
    rightText?: string
  }>()

  // const emit = defineEmits(['click-right'])
  const emit = defineEmits<{
    (e: 'click-right'): void
  }>()

  const onClickRight = () => {
    emit('click-right')
  }
</script>
<template>
  <van-nav-bar @click-right="onClickRight" fixed :title="title" left-arrow :right-text="rightText" />
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
