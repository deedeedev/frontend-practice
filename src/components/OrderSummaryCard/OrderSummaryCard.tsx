import Link from "next/link"
import Image from "next/image"

import heroImg from "./illustration-hero.svg"
import musicIcon from "./icon-music.svg"

export default function OrderSummaryCard() {
  return (
    <div className="container mx-6 flex max-w-sm flex-col items-center gap-10 overflow-hidden rounded-3xl bg-white pb-6">
      <Image src={heroImg} alt="hero" />
      {/* Intro */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-oscDarkBlue text-[22px] font-extrabold">
          Order Summary
        </h1>
        <p className="px-8 text-center">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      {/* Annual Plan */}
      <div className="flex w-full items-center justify-center gap-4 px-10">
        <Image src={musicIcon} alt="music icon" className="size-10" />
        <div className="text-[15px] leading-[22px]">
          <p className="text-oscDarkBlue font-bold">Annual Plan</p>
          <p>$59.99/year</p>
        </div>
        <Link
          href="#"
          className="grow text-right text-[13px] font-bold text-indigo-800 underline hover:text-indigo-500 hover:no-underline"
        >
          Change
        </Link>
      </div>
      {/* Buttons */}
      <div className="w-full space-y-5 px-8 text-center text-[15px]">
        <button className="bg-oscBrightBlue w-full rounded-xl px-8 py-3.5 font-extrabold text-white hover:bg-indigo-500">
          Proceed to Payment
        </button>
        <button className="hover:text-oscDarkBlue bg-white font-extrabold">
          Cancel Order
        </button>
      </div>
    </div>
  )
}
