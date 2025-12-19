<script setup lang="ts">
import type { KnowledgeType } from '@/types/consult';
import KnowledgeCard from '@/views/Home/components/KnowledgeCard.vue'
import { ref } from 'vue';

defineProps<{
  type: KnowledgeType
}>()

const loading = ref(false)
const finished = ref(false)
const list = ref<number[]>([])
const onLoad = () => {
  // 模拟后台加载数据
  const data = [1, 2, 3, 4, 5]
  setTimeout(() => {
    list.value.push (...data)
    if (list.value.length > 20) {
      finished.value = true
    }
    loading.value = false
  }, 1500);
}
</script>

  <template>
    <div class="knowledge-list">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <knowledge-card v-for="(item, i) in list" :key="i"></knowledge-card>
      </van-list>
    </div>
  </template>

  <style lang="scss" scoped>
  .knowledge-list {
    padding: 0 15px;
  }
  </style>
