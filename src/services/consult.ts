import type {
  DoctorPage,
  FollowType,
  KnowledgePage,
  KnowledgeParams,
  PageParams,
  TopDep
} from '@/types/consult'
import { request } from '@/utils/request'

export const getKnowledgePage = (params: KnowledgeParams) =>
  request<KnowledgePage>('/patient/home/knowledge', 'GET', params)

// 获取医生分页数据
export const getDoctorPageAPI = (params: PageParams) =>
  request<DoctorPage>('/home/page/doc', 'GET', params)

// 关注的API
export const followOrUnfollow = (id: string, type: FollowType = 'doc') =>
  request('/like', 'POST', { id, type })

// 获取科室数据(一级科室&二级科室)
export const getAllDep = () => request<TopDep[]>('/dep/all')
