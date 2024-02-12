import Image from "next/image"
import ProfileCard from "@/components/ProfileCard/ProfileCard"

import bgImgTop from "./bg-pattern-top.svg"
import bgImgBottom from "./bg-pattern-bottom.svg"

export default function Page() {
  return (
    <div className="bg-pcDarkCyan flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={bgImgTop}
        alt="background top"
        aria-hidden
        className="absolute -left-[300px] -top-[600px] z-0"
        width={1000}
        height={1000}
      />
      <Image
        src={bgImgBottom}
        alt="background bottom"
        aria-hidden
        className="absolute -bottom-[600px] -right-[300px] z-0"
        width={1000}
        height={1000}
      />
      <ProfileCard />
    </div>
  )
}
