import { createWorkspace, deleteWorkspace, filterWorkspaces, getDetailWorkspace, getUserWorkspace, updateWorkspace } from "@/services/workspace.service"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const useWorkspace = () => {

  const queryClient = useQueryClient()

  const useUserWorkspace = (userId: string) =>
    useQuery({
      queryKey: ['workspaces', userId],
      queryFn: () => getUserWorkspace(userId),
      enabled: !!userId
    })

  const useWorkspaceDetail = (id: string) =>
    useQuery({
      queryKey: ["workspace", id],
      queryFn: () => getDetailWorkspace(id),
      enabled: !!id,
    })

  const useFilterWorkspaces = (filter: any) =>
    useQuery({
      queryKey: ["workspaces-filter", filter],
      queryFn: () => filterWorkspaces(filter),
    })

  const useCreateWorkspace = () =>
    useMutation({
      mutationFn: createWorkspace,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workspaces"] }),
    })

  const useUpdateWorkspace = () =>
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: any }) => updateWorkspace(id, data),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workspaces"] }),
    })

  const useDeleteWorkspace = () =>
    useMutation({
      mutationFn: deleteWorkspace,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workspaces"] }),
    })


  return {
    useUserWorkspace,
    useWorkspaceDetail,
    useFilterWorkspaces,
    useCreateWorkspace,
    useUpdateWorkspace,
    useDeleteWorkspace,
  }
}

export default useWorkspace()
