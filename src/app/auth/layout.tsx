import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { GiPin } from "react-icons/gi"
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center relative overflow-hidden gap-5">

      <div className="flex flex-col justify-center gap-2 py-10  items-center group">
        <h1 className="text-5xl hover:scale-110 group-hover:[&:not(:hover)]:scale-90 bg-red-400 border-2 border-black  duration-300 font-bold text-black
          from-emerald-300 ease-in-out via-teal-500 to-emerald-300 px-4 py-2 rounded-xl">
          LAUNCHPAD
        </h1>
        <Link href={'/'}>
          <Button className=" flex items-center gap-2 hover:scale-110 hover:bg-blue-300 border-2 border-black group-hover:[&:not(:hover)]:scale-90  
            duration-300 text-black bg-blue-400 px-2 py-1 rounded-lg font-semibold text-lg">
            <IoMdHome />
            Back to Main Page
          </Button>
        </Link>
      </div>

      <div className="relative  border-2 bg-white border-black p-8  rounded-t-2xl rounded-xl shadow-xl w-full max-w-xl">
        {children}

        <div className="absolute -top-[2rem] -right-8 text-5xl">
          <GiPin />
        </div>
        {/* <> */}
        {/*   <div className="rounded-full animate-[var(--animate-bubble-float)] bg-white/10 border-white/30 border-r-4 absolute w-20 h-20 top-2   -left-10" /> */}
        {/*   <div className="rounded-full animate-[var(--animate-bubble-float)]  bg-white/15 border-white/30 border-r-4 absolute w-7 h-7 top-[7rem]   left-4" /> */}
        {/* </> */}
        {/* <> */}
        {/*   <div className="rounded-full bg-white/15  animate-[var(--animate-bubble-float)] border-white/30 border-r-4 absolute w-7 h-7 bottom-[7rem]   right-4" /> */}
        {/*   <div className="rounded-full bg-white/10  animate-[var(--animate-bubble-float)] border-white/30 border-r-4 absolute w-10 h-10 bottom-[10rem]   -right-7" /> */}
        {/* </> */}
      </div>
    </div>
  )
}
