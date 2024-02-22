import SignupForm from "@/components/SignupForm/SignupForm"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Page() {
  return (
    <div
      className={`${poppins.className} flex min-h-dvh w-full justify-center bg-icwsufRed bg-icwsfMobile`}
    >
      <div className="container my-16 flex flex-col gap-16 px-4 text-[16px] text-white sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:gap-8 lg:gap-16">
        {/* Intro */}
        <div className="mx-auto max-w-sm text-center sm:flex sm:flex-col sm:justify-center sm:text-left lg:max-w-md">
          <h1 className="mb-6 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Learn to code by watching others
          </h1>
          <p className="font-medium">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        {/* Button + Form */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center rounded-lg bg-icwsufBlue px-20 py-5 text-center shadow-[0_8px_0_rgba(0,0,0,0.2)]">
            <p>
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>
          {/* Form */}
          <div className="w-full overflow-hidden rounded-xl">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
