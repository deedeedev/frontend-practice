import Image from "next/image"
import Link from "next/link"
import { Poppins, Open_Sans } from "next/font/google"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400"] })

import logoImg from "./logo.svg"
import mockupsImg from "./illustration-mockups.svg"

export default function Page() {
  return (
    <div
      className={`${openSans.className} bg-hlpwsisViolet flex min-h-dvh w-full justify-center text-white`}
    >
      Hello, World!
    </div>
  )
}
