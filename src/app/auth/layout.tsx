import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 relative overflow-hidden">

      <div className="flex justify-between  items-start">
        <h1>
          Launchpad
        </h1>
        <Link href={''} >
          <p>
            Back to main page
          </p>
        </Link>
      </div>

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
