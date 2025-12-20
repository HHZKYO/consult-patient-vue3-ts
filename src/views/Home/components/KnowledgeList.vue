<script setup lang="ts">
import { getKnowledgePage } from '@/services/consult';
import type { KnowledgeList, KnowledgeParams, KnowledgeType } from '@/types/consult';
import KnowledgeCard from '@/views/Home/components/KnowledgeCard.vue'
import { ref } from 'vue';

const props = defineProps<{
  type: KnowledgeType
}>()

const loading = ref(false)
const finished = ref(false)
// 查询参数
const params = ref<KnowledgeParams>({
  type: props.type,
  current: 1,
  pageSize: 5
})
const list = ref<KnowledgeList>([])
const onLoad = async () => {
  console.log('a')
  const res = await getKnowledgePage(params.value)
  list.value.push(...res.data.rows)
  // 判断是否加载完成
  if(params.value.current >= res.data.pageTotal) {
    finished.value = true
  } else {
    params.value.current ++
  }
  loading.value = false
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
        <knowledge-card v-for="item in list" :key="item.id" :item="item"></knowledge-card>
      </van-list>
    </div>
  </template>

  <style lang="scss" scoped>
  .knowledge-list {
    padding: 0 15px;
  }
  </style>
