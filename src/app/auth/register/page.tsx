import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const page = () => {
  return (
    <form action="" className=" flex flex-col gap-10">
      <div className="flex text-white flex-col justify-center gap-4">
        <Label className="font-bold">Name</Label>
        <Input placeholder="Enter your name..." className="placeholder:text-white focus-visible:ring-white focus:ring-white border-white focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex text-white flex-col justify-center gap-4">
        <Label className="font-bold">Email</Label>
        <Input placeholder="Enter your email..." className="placeholder:text-white focus-visible:ring-white focus:ring-white border-white focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-white font-bold">Password</Label>
        <Input placeholder="Enter your password..." className="placeholder:text-white text-white border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-white font-bold">Confirm Password</Label>
        <Input placeholder="Enter your password..." className="placeholder:text-white text-white border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <Button type="submit" className="hover:scale-110  bg-white/20 shadow-md border-white/50 hover:bg-white/20 border-t-2 text-white font-bold">
        Register
      </Button>
      <Link href={'/auth/login'}>
        <p className="flex justify-center text-white">
          Login here if you already had account!
        </p>
      </Link>
    </form>
  )
}

export default page
