import { api } from "@/api/api"
import { CreateWorkspacePayload } from "@/interfaces/create-workspace.interface"
import { UpdateWorkspacePayload } from "@/interfaces/update-workspace.interface"

export const getUserWorkspace = async (userId: string) => {
  const res = await api.get('/workspace', { params: userId })
  return res.data
}

export const getDetailWorkspace = async (id: string) => {
  const res = await api.get(`/workspace${id}`)
  return res.data
}

export const createWorkspace = async (payload: CreateWorkspacePayload) => {
  const res = await api.post('/workspace', payload)
  return res.data
}

export const updateWorkspace = async (id: string, payload: UpdateWorkspacePayload) => {
  const res = await api.post(`/workspace${id}`, payload)
  return res.data
}

export const deleteWorkspace = async (id: string) => {
  const res = await api.delete(`/workspace/${id}`)
  return res.data

}
