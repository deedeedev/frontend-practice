import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Page() {
  return (
    <div
      className={`${poppins.className} flex min-h-dvh w-full items-center justify-center`}
    >
      Hello, World
    </div>
  )
}
