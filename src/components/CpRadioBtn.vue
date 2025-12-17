<!-- <script setup lang="ts">
// 实现计数器
// model 解析为：通过:modelValue传值给子组件，子组件通过@update:modelValue自定义事件通知父组件进行值的修改
defineProps<{
  modelValue: number
}>()

defineEmits<{
  (e: 'update:modelValue', count: number) : void
}>()
</script>

<template>
  <div class="cp-radio-btn">
    计数器：{{ modelValue }}
    <button @click="$emit('update:modelValue', modelValue + 1)">+1</button>
  </div>
</template>

<style lang="scss" scoped></style> -->

<script setup lang="ts">
  defineProps<{
    count: number
  }>()

  defineEmits<{
    (e: 'update:count', count: number) : void
  }>()
  </script>

  <template>
    <div class="cp-radio-btn">
      计数器：{{ count }}
      <button @click="$emit('update:count', count + 1)">+1</button>
    </div>
  </template>

  <style lang="scss" scoped></style>
