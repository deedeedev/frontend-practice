"use client"

import { useState } from "react"
import Image from "next/image"
import { Overpass } from "next/font/google"

import { cn } from "@/lib/utils"
import starIcon from "./icon-star.svg"
import thankYouImage from "./illustration-thank-you.svg"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

export default function InteractiveRating() {
  const [rating, setRating] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)

  return (
    <>
      {submitted ? (
        <div
          className={cn(
            `${overpass.className} container mx-4 flex h-[22.5rem] max-w-sm flex-col items-center justify-center gap-5 rounded-2xl bg-ircDarkerBlue px-6 py-8 text-[0.9rem] text-ircLightGray`,
          )}
        >
          <Image src={thankYouImage} alt="thank you" aria-hidden />
          <div className="rounded-full bg-ircDarkBlue px-4 py-1 text-ircOrange">
            You selected {rating} out of 5
          </div>
          <h1 className="text-2xl font-bold text-white">Thank you!</h1>
          <p className="text-ircLighterGray text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div
          className={cn(
            `${overpass.className} container mx-4 flex h-[22.5rem] max-w-sm flex-col gap-5 rounded-2xl bg-ircDarkerBlue p-6 text-[0.9rem] text-ircLightGray`,
          )}
        >
          <div className="flex h-11 w-11 items-center justify-center self-start rounded-full bg-ircDarkBlue">
            <Image src={starIcon} alt="star icon" aria-hidden />
          </div>
          <h1 className="text-2xl font-semibold text-white">How did we do?</h1>
          <p className="-mt-3 text-[0.9rem]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex items-center justify-between">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
              <div
                className={cn(
                  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-ircDarkBlue hover:bg-ircLightGray hover:font-bold hover:text-white",
                  {
                    "bg-ircOrange text-white hover:bg-ircOrange hover:text-white":
                      rating === n,
                  },
                )}
                key={n}
                onClick={() => setRating(n)}
              >
                {n}
              </div>
            ))}
          </div>
          <button
            className="rounded-full bg-ircOrange p-3 uppercase tracking-widest text-white hover:bg-white hover:text-ircOrange"
            onClick={() => (rating ? setSubmitted(true) : null)}
          >
            submit
          </button>
        </div>
      )}
    </>
  )
}
