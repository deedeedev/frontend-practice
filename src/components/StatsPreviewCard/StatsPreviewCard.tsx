import Image from "next/image"
import { Inter, Lexend_Deca } from "next/font/google"

import mobileImg from "./image-header-mobile.jpg"
import desktopImg from "./image-header-desktop.jpg"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"] })

export default function StatsPreviewCard() {
  return (
    <div
      className={`${inter.className} bg-spccDarkDesaturatedBlue text-spccSlightlyTransparentWhite1 container mx-6 flex flex-col gap-10 overflow-hidden rounded-lg pb-10 text-[15px] md:h-[446px] md:flex-row md:items-center md:gap-0 md:pb-0 lg:max-w-[1050px]`}
    >
      <div className="relative md:hidden">
        <Image src={mobileImg} alt="office" className="mx-auto" aria-hidden />
        <div className="absolute inset-0 z-10 bg-[hsla(277,90%,35%,0.5)]"></div>
      </div>
      <div className="flex flex-col gap-10 md:items-start md:justify-center md:gap-16 md:p-16">
        {/* Intro */}
        <div className="px-6 text-center md:p-0 md:text-left">
          <h1 className="mb-4 text-3xl font-bold leading-8 text-white md:mb-6 md:text-4xl">
            Get <span className="text-spccSoftViolet">insights</span> that help
            your business grow.
          </h1>
          <div className="md:max-w-xs">
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="mx-auto text-center md:text-left">
            <p className="text-2xl font-bold text-white">10k+</p>
            <p
              className={`${lexendDeca.className} text-spccSlightlyTransparentWhite2 text-[13px] uppercase tracking-wide`}
            >
              companies
            </p>
          </div>
          <div className="mx-auto text-center md:text-left">
            <p className="text-2xl font-bold text-white">314</p>
            <p
              className={`${lexendDeca.className} text-spccSlightlyTransparentWhite2 text-[13px] uppercase tracking-wide`}
            >
              templates
            </p>
          </div>
          <div className="mx-auto text-center md:text-left">
            <p className="text-2xl font-bold text-white">12M+</p>
            <p
              className={`${lexendDeca.className} text-spccSlightlyTransparentWhite2 text-[13px] uppercase tracking-wide`}
            >
              queries
            </p>
          </div>
        </div>
      </div>
      <div className="bg-spccDesktop relative hidden h-[446px] w-full md:block">
        <div className="absolute inset-0 z-10 bg-[hsla(277,90%,35%,0.5)]"></div>
      </div>
    </div>
  )
}
