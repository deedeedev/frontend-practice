import Image from "next/image"
import { Josefin_Sans } from "next/font/google"

import BACSPForm from "@/components/BACSPForm/BACSPForm"
import desktopHeroImg from "./hero-desktop.jpg"
import mobileHeroImg from "./hero-mobile.jpg"
import logoImg from "./logo.svg"

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

export default function Page() {
  return (
    <div
      className={`${josefinSans.className} flex min-h-dvh w-full items-start justify-center bg-contain bg-no-repeat md:bg-[url('/14-base-apparel-coming-soon-page/bg-pattern-desktop.svg')]`}
    >
      {/* Container: Text + Form */}
      <div className="mx-auto flex max-w-sm flex-col lg:max-w-[26rem] lg:px-10 xl:px-0">
        {/* Logo */}
        <div className="p-8 lg:px-0 lg:py-24">
          <Image src={logoImg} alt="logo" className="w-[100px] lg:w-[180px]" />
        </div>
        {/* Image */}
        <div className="lg:hidden">
          <Image src={mobileHeroImg} alt="model" />
        </div>
        {/* Intro */}
        <div className="mt-14 flex flex-col items-center gap-4 px-10 lg:px-0">
          <div className="flex w-full flex-col items-center text-[2.5rem] uppercase leading-[2.8rem] tracking-[.7rem] lg:items-start lg:text-[3.2rem] lg:leading-[3.5rem]">
            <div className="font-light text-bacspDesaturatedRed">
              we&apos;re
            </div>
            <div className="font-bold text-bacspDarkGrayishRed">coming</div>
            <div className="font-bold text-bacspDarkGrayishRed">soon</div>
          </div>
          <p className="container max-w-sm text-center text-[14px] text-bacspDesaturatedRed lg:text-left lg:text-[16px]">
            Hello fellow shoppers! We&apos;re currently building our new fasion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        {/* Form */}
        <div className="my-8 text-center">
          <BACSPForm />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={desktopHeroImg}
          placeholder="blur"
          alt="model"
          className="min-h-dvh w-auto"
        />
      </div>
    </div>
  )
}
