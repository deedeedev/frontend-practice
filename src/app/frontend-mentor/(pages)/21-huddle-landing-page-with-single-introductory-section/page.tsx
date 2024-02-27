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
      className={`${openSans.className} bg-hlpwsisViolet bg-hlpwsisMobile sm:bg-hlpwsisDesktop flex min-h-dvh w-full justify-center bg-contain bg-no-repeat text-[15px] text-white sm:bg-cover`}
    >
      {/* Container */}
      <div className="container flex flex-col gap-12 p-8 md:pt-14">
        <Image src={logoImg} alt="logo" className="w-32 md:w-48 lg:mb-12" />
        {/* Image + Intro */}
        <div className="flex flex-col gap-12 md:flex-row">
          <Image src={mockupsImg} alt="mockups" className="md:max-w-[55%]" />
          {/* Intro */}
          <div className="space-y-4 text-center md:mt-12 md:text-left">
            <h1
              className={`${poppins.className} text-2xl font-extrabold lg:text-4xl lg:leading-[3.5rem]`}
            >
              Build The Community Your Fans Will Love
            </h1>
            <p className="lg:text-lg">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="text-hlpwsisViolet hover:bg-hlpwsisSoftMagenta min-w-48 rounded-full bg-white py-3 text-xs shadow-xl hover:text-white lg:text-base lg:font-bold">
              Register
            </button>
          </div>
        </div>
        {/* Social Links */}
        <div className="mt-auto flex justify-center gap-2.5 md:justify-end md:gap-3.5">
          <Link
            href="#"
            className="hover:border-hlpwsisSoftMagenta group rounded-full border border-white p-1.5 md:p-2"
            aria-label="Facebook"
          >
            <FaFacebookF className="group-hover:text-hlpwsisSoftMagenta size-3.5 md:size-5" />
          </Link>
          <Link
            href="#"
            className="hover:border-hlpwsisSoftMagenta group rounded-full border border-white p-1.5 md:p-2"
            aria-label="Twitter"
          >
            <FaTwitter className="group-hover:text-hlpwsisSoftMagenta size-3.5 md:size-5" />
          </Link>
          <Link
            href="#"
            className="hover:border-hlpwsisSoftMagenta group rounded-full border border-white p-1.5 md:p-2"
            aria-label="Instagram"
          >
            <FaInstagram className="group-hover:text-hlpwsisSoftMagenta size-3.5 md:size-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
