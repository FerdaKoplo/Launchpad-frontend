"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAuth from "@/hooks/useAuth"
import { loginSchema, LoginSchema } from "@/schema/login.schema"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const Login = () => {

  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })


  return (
    <form onSubmit={handleSubmit((data) => login.mutate(data))} className="flex flex-col gap-10">
      <div className="flex text-white flex-col justify-center gap-4">
        <Label className="font-bold">Email</Label>
        <Input {...register("email")} placeholder="Enter your email..." className="placeholder:text-white focus-visible:ring-white focus:ring-white border-white focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-white font-bold">Password</Label>
        <Input type="password" {...register("password")} placeholder="Enter your password..." className="placeholder:text-white text-white border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <Button type="submit" className="hover:scale-110  bg-white/20 shadow-md border-white/50 hover:bg-white/20 border-t-2 text-white font-bold">
        Login
      </Button>
      <Link href={'/auth/register'}>
        <p className="flex justify-center text-white">
          Register here if dont have account yet!
        </p>
      </Link>
    </form>
  )
}

export default Login
