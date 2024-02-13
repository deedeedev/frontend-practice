import { League_Spartan } from "next/font/google"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export default function Page() {
  return (
    <div
      className={`${leagueSpartan.className} bg-spsLightGrayishMagenta text-spsVeryDarkMagenta/70 flex min-h-screen w-full items-center justify-center overflow-hidden`}
    >
      Hello, World
    </div>
  )
}
