"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAuth from "@/hooks/useAuth"
import { RegisterSchema, registerSchema } from "@/schema/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"

const page = () => {

  const { registerAccount } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  })

  return (
    <form onSubmit={handleSubmit((data: RegisterSchema) => registerAccount.mutate(data))} className=" flex flex-col gap-10">
      <div className="flex text-black flex-col justify-center gap-4">
        <Label className="font-bold">Name</Label>
        <Input {...register("name")} placeholder="Enter your name..." className="placeholder:text-black focus-visible:ring-white focus:ring-white border-white focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex text-black flex-col justify-center gap-4">
        <Label className="font-bold">Email</Label>
        <Input {...register("email")} placeholder="Enter your email..." className="placeholder:text-black focus-visible:ring-white focus:ring-white border-white focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-black font-bold">Password</Label>
        <Input {...register("password")} placeholder="Enter your password..." className="placeholder:text-black text-blackborder-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-black font-bold">Confirm Password</Label>
        <Input {...register("confirm_password")} placeholder="Enter your password..." className="placeholder:text-black text-black border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <Button type="submit" className="hover:scale-105 bg-blue-400 hover:bg-red-400 shadow-md border-black border-2 text-black font-bold">
        Register
      </Button>
      <Link href={'/auth/login'}>
        <p className="flex justify-center text-black">
          Login here if you already had account!
        </p>
      </Link>
    </form>
  )
}

export default page
