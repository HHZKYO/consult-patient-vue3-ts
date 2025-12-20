import type {
  DoctorPage,
  KnowledgePage,
  KnowledgeParams,
  PageParams
} from '@/types/consult'
import { request } from '@/utils/request'

export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

// 获取医生分页数据
export const getDoctorPageAPI = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)
