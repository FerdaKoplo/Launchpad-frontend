import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
  return (
    <form className="flex flex-col gap-10">
      <div className="flex flex-col justify-center gap-4">
        <Label>Email</Label>
        <Input placeholder="Enter your email..." className="border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>
      <div className="flex flex-col gap-4">
        <Label>Password</Label>
        <Input placeholder="Enter your password..." className="border-white focus-visible:ring-0 focus-visible:ring-offset-0 transition-none" />
      </div>

    </form>
  )
}

export default Login
