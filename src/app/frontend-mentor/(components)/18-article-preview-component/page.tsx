import { Manrope } from "next/font/google"
import ArticlePreview from "@/components/ArticlePreview/ArticlePreview"

import avatarImg from "./avatar-michelle.jpg"
import drawersImg from "./drawers.jpg"

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"] })

const user = {
  name: "Michelle Appleton",
  img: avatarImg,
  date: new Date("28 Jun 2020"),
}

export default function Page() {
  return (
    <div
      className={`${manrope.className} text-apcDesaturatedDarkBlue bg-apcLightGrayishBlue flex min-h-dvh w-full items-center justify-center text-[13px]`}
    >
      <ArticlePreview img={drawersImg} user={user} />
    </div>
  )
}
