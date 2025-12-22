import type { ConsultType } from '@/enums'
import type { PartialConsult } from '@/types/consult'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConsultStore = defineStore(
  'cp-consult',
  () => {
    // 问诊信息
    const consult = ref<PartialConsult>({})
    // 记录问诊类型
    const setType = (type: ConsultType) => {
      return (consult.value.type = type)
    }
    // 设置急速问诊类型
    const setIllnessType = (type: 0 | 1) => (consult.value.illnessType = type)
    return { consult, setType, setIllnessType }
  },
  { persist: true }
)
