import Image from "next/image"
import Link from "next/link"
import { Libre_Franklin } from "next/font/google"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import PingComingSoonForm from "@/components/PingComingSoonForm/PingComingSoonForm"

import dashboardImg from "./illustration-dashboard.png"
import logoImg from "./logo.svg"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
})

export default function Page() {
  return (
    <div
      className={`${libreFranklin.className} text-psccspGray flex min-h-dvh w-full items-center justify-center bg-white text-[20px]`}
    >
      <PingComingSoonForm />
    </div>
  )
}
