import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 relative overflow-hidden gap-5">

      <div className="flex flex-col justify-center gap-2  items-center group">
        <h1 className="text-5xl hover:scale-110 group-hover:[&:not(:hover)]:scale-90  duration-300 font-bold border-white/20 border-2 bg-gradient-to-tl
          from-emerald-300 ease-in-out via-teal-500 to-emerald-300 px-4 py-2 rounded-xl text-white">
          LAUNCHPAD
        </h1>
        <Link href={'/'}>
          <Button className=" flex items-center gap-2 hover:scale-110 group-hover:[&:not(:hover)]:scale-90  
            duration-300 text-white bg-gradient-to-tr from-teal-300 px-2 py-1 rounded-lg border-2 border-white/40 via-teal-500 to-emerald-300 font-semibold text-lg"          >
            <IoMdHome />
            Back to Main Page
          </Button>
        </Link>
      </div>

      <div className="relative bg-white/20 backdrop-blur-xl border-2 border-white/40 p-8  rounded-t-2xl rounded-b-[5rem] shadow-lg w-full max-w-xl">
        {children}
        <>
          <div className="rounded-full bg-white/10 border-white/30 border-r-4 absolute w-20 h-20 top-2   -left-10" />
          <div className="rounded-full bg-white/15 border-white/30 border-r-4 absolute w-7 h-7 top-[7rem]   left-4" />
        </>
        <>
          <div className="rounded-full bg-white/15 border-white/30 border-r-4 absolute w-7 h-7 bottom-[7rem]   right-4" />
          <div className="rounded-full bg-white/10 border-white/30 border-r-4 absolute w-10 h-10 bottom-[10rem]   -right-7" />
        </>
      </div>
    </div>
  )
}
