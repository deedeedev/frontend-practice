import Image from "next/image"
import { Kumbh_Sans } from "next/font/google"

import bgImg from "./bg-pattern-card.svg"

const kumbSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export default function ProfileCard() {
  return (
    <div className={`${kumbSans.className} text-[18px]`}>Hello, World!</div>
  )
}
