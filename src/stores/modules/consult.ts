import type { ConsultType } from '@/enums'
import type { ConsultIllness, PartialConsult } from '@/types/consult'
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
    // 设置急速问诊级别
    const setIllnessType = (type: 0 | 1) => (consult.value.illnessType = type)
    // 设置科室
    const setDep = (id: string) => (consult.value.depId = id)
    // 记录病情描述
    const setIllness = (item: ConsultIllness) => {
      consult.value.illnessDesc = item.illnessDesc
      consult.value.illnessTime = item.illnessTime
      consult.value.consultFlag = item.consultFlag
      consult.value.pictures = item.pictures
    }
    // 记录患者
    const setPatient = (id: string) => (consult.value.patientId = id)
    // 记录优惠券
    const setCoupon = (id: string) => (consult.value.couponId = id)
    return {
      consult,
      setType,
      setIllnessType,
      setDep,
      setIllness,
      setPatient,
      setCoupon
    }
  },
  { persist: true }
)
