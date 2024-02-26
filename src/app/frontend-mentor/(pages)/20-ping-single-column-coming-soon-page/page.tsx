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
      className={`${libreFranklin.className} text-psccspGray mx-auto flex min-h-dvh w-full max-w-[38rem] flex-col items-center justify-center gap-10 bg-white px-8 pb-8 pt-20 text-[20px]`}
    >
      <Image src={logoImg} alt="logo" width={70} />
      <div className="space-y-3 text-center">
        <h1 className="md:text-4xl">
          We are launching <span className="font-bold text-black">soon!</span>
        </h1>
        <p className="text-xs text-black md:text-sm">
          Subscribe and get notified
        </p>
      </div>
      <PingComingSoonForm />
      <Image src={dashboardImg} alt="dashboard" />
      <div className="mt-auto text-center">
        <div className="text-psccspBlue mb-6 flex justify-center gap-6">
          <Link
            href="#"
            className="hover:bg-psccspBlue group rounded-full border p-2"
          >
            <FaFacebookF className="size-4 group-hover:text-white" />
          </Link>
          <Link
            href="#"
            className="hover:bg-psccspBlue group rounded-full border p-2"
          >
            <FaTwitter className="size-4 group-hover:text-white" />
          </Link>
          <Link
            href="#"
            className="hover:bg-psccspBlue group rounded-full border p-2"
          >
            <FaInstagram className="size-4 group-hover:text-white" />
          </Link>
        </div>
        <p className="text-[10px]">
          &copy; Copyright Ping. All rights reserved.
        </p>
      </div>
    </div>
  )
}
