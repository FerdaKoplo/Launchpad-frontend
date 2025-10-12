export interface CreateWorkspacePayload {
  name: string
  ownerId: string
  ownerEmail?: string
  deletedAt?: Date | null

}
