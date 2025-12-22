<script setup lang="ts">
import { getAllDep } from '@/services/consult';
import { useConsultStore } from '@/stores';
import type { TopDep } from '@/types/consult';
import { computed, onMounted, ref } from 'vue'

const active = ref(0)
const store = useConsultStore()
// 所有科室数据
const allDep = ref<TopDep[]>([])

onMounted(async () => {
  const res = await getAllDep()
  allDep.value = res.data
})

// 这行代码的作用是根据当前选中的左侧一级科室（通过 active 的索引），从 allDep
// 中获取对应的子科室(child)列表，并通过 computed 包装为响应式数据，便于模板中动态展示右侧的二级科室。
const subDep = computed(() => allDep.value[active.value]?.child)
</script>

<template>
  <div class="consult-dep-page">
    <cp-nav-bar title="选择科室" />
    <div class="wrapper">
      <van-sidebar v-model="active">
        <van-sidebar-item
          :title="item.name"
          v-for="item in allDep"
          :key="item.id"
        />
      </van-sidebar>
      <div class="sub-dep">
        <router-link
          to="/consult/illness"
          v-for="sub in subDep"
          :key="sub.id"
          @click="store.setDep(sub.id)"
        >
          {{ sub.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.consult-dep-page {
  padding-top: 46px;
  .wrapper {
    height: calc(100vh - 46px);
    overflow: hidden;
    display: flex;
    .van-sidebar {
      width: 114px;
      &-item {
        padding: 14px;
        color: var(--cp-tag);
        &--select {
          color: var(--cp-main);
          font-weight: normal;
          &::before {
            display: none;
          }
        }
      }
    }
    .sub-dep {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      > a {
        display: block;
        padding: 14px 30px;
        color: var(--cp-dark);
      }
    }
  }
}
</style>
