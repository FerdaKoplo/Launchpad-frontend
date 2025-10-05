import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email('invalid email'),
  password: z.string().min(6, 'password too short')
})


export type LoginSchema = z.infer<typeof loginSchema>

