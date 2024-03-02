import { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import data from "./data"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "800"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor: Notifications Page",
  description:
    "My solution for the Notifications Page challenge on Frontend Mentor",
  icons: "/25-notifications-page/favicon-32x32.png",
}

export default function Page() {
  return (
    <div
      className={`${plusJakartaSans.className} text-nswsmDarkSlateGray flex min-h-dvh w-full items-center justify-center bg-npcSoftBlue text-[calc(16rem/16)]`}
    ></div>
  )
}
