import { z } from "zod"


export const registerSchema = z.object({
  name: z.string().min(5, 'Username must be at least 5 character'),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirm_password: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirm_password, {
  path: ["confirm_password"],
  message: "Passwords do not match",
})

export type RegisterSchema = z.infer<typeof registerSchema>

