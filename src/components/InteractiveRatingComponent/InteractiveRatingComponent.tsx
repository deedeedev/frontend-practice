"use client"

import { useState } from "react"
import Image from "next/image"
import { Overpass } from "next/font/google"

import clsx from "clsx"
import starIcon from "./icon-star.svg"
import thankYouImage from "./illustration-thank-you.svg"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

export default function InteractiveRatingComponent() {
  const [rating, setRating] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState<boolean>(false)

  return (
    <>
      {submitted ? (
        <div
          className={clsx(
            `${overpass.className} bg-ircDarkerBlue text-ircLightGray container mx-4 flex h-[22.5rem] max-w-sm flex-col items-center justify-center gap-5 rounded-2xl px-6 py-8 text-[0.9rem]`,
          )}
        >
          <Image src={thankYouImage} alt="thank you" aria-hidden />
          <div className="bg-ircDarkBlue text-ircOrange rounded-full px-4 py-1">
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
          className={clsx(
            `${overpass.className} bg-ircDarkerBlue text-ircLightGray container mx-4 flex h-[22.5rem] max-w-sm flex-col gap-5 rounded-2xl p-6 text-[0.9rem]`,
          )}
        >
          <div className="bg-ircDarkBlue flex h-11 w-11 items-center justify-center self-start rounded-full">
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
                className={clsx(
                  "bg-ircDarkBlue hover:bg-ircLightGray flex h-11 w-11 cursor-pointer items-center justify-center rounded-full hover:font-bold hover:text-white",
                  {
                    "bg-ircOrange hover:bg-ircOrange text-white hover:text-white":
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
            className="bg-ircOrange hover:text-ircOrange rounded-full p-3 uppercase tracking-widest text-white hover:bg-white"
            onClick={() => (rating ? setSubmitted(true) : null)}
          >
            submit
          </button>
        </div>
      )}
    </>
  )
}
