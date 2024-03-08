"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { icdfHandleForm } from "@/app/actions"

import cardLogo from "./card-logo.svg"
import completeIcon from "./icon-complete.svg"

export default function InteractiveCardDetailsForm() {
  const [name, setName] = useState<string>("")
  const [number, setNumber] = useState<string>("")
  const [day, setDay] = useState<string>("")
  const [month, setMonth] = useState<string>("")
  const [cvc, setCvc] = useState<string>("")
  const [state, dispatch] = useFormState(icdfHandleForm, null)

  return (
    <div className="bg-icdfMobile flex min-h-dvh w-full flex-col items-center bg-white bg-contain bg-no-repeat px-4 pt-8">
      <div className="relative mx-auto mb-[290px] w-[340px]">
        <Image
          src="/26-interactive-card-details-form/bg-card-back.png"
          alt="card front"
          width={447}
          height={245}
          className="absolute right-0 h-[160px] w-[285px]"
        />
        <Image
          src="/26-interactive-card-details-form/bg-card-front.png"
          alt="card back"
          width={447}
          height={245}
          className="absolute left-0 top-[90px] h-[160px] w-[285px]"
        />
      </div>
      <div className="text-xs">{JSON.stringify(state)}</div>
      <form action={dispatch} className="flex w-full flex-col gap-6 px-2">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-icdfVeryDarkViolet text-[calc(12.5rem/16)] uppercase tracking-[0.2em]"
          >
            cardholder name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
            className={cn(
              "placeholder:text-icdfDarkGrayishViolet/60 focus:border-icdfGradientTo w-full rounded-lg border px-4 py-2 focus:border focus:outline-none",
              { "border-icdfRed focus:border-icdfRed": state?.errors?.name },
            )}
          />
          <p
            className={cn(
              "text-icdfRed text-[calc(12.5rem/16)]",
              state?.errors?.name ? "block" : "hidden",
            )}
          >
            {state?.errors?.name?.[0]}
          </p>
        </div>
        {/* Number */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="number"
            className="text-icdfVeryDarkViolet text-[calc(12.5rem/16)] uppercase tracking-[0.2em]"
          >
            card number
          </label>
          <input
            type="text"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            className={cn(
              "placeholder:text-icdfDarkGrayishViolet/60 focus:border-icdfGradientTo w-full rounded-lg border px-4 py-2 focus:border focus:outline-none",
              { "border-icdfRed focus:border-icdfRed": state?.errors?.number },
            )}
          />
          <p className={cn("text-icdfRed hidden text-[calc(12.5rem/16)]")}>
            {state?.errors?.number?.[0]}
          </p>
        </div>
        <div className="flex gap-1">
          <div>
            <label
              htmlFor="month"
              className="text-icdfVeryDarkViolet text-[calc(12.5rem/16)] uppercase tracking-[0.2em]"
            >
              exp. date (mm/yy)
            </label>
            <div className="flex gap-1">
              <input
                type="text"
                name="month"
                placeholder="MM"
                className={cn(
                  "placeholder:text-icdfDarkGrayishViolet/60 focus:border-icdfGradientTo w-full max-w-[calc(80rem/16)] rounded-lg border px-4 py-2 focus:border focus:outline-none",
                  {
                    "border-icdfRed focus:border-icdfRed": state?.errors?.month,
                  },
                )}
              />
              <input
                type="text"
                name="year"
                placeholder="YY"
                className={cn(
                  "placeholder:text-icdfDarkGrayishViolet/60 focus:border-icdfGradientTo w-full max-w-[calc(80rem/16)] rounded-lg border px-4 py-2 focus:border focus:outline-none",
                  {
                    "border-icdfRed focus:border-icdfRed": state?.errors?.year,
                  },
                )}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="cvc"
              className="text-icdfVeryDarkViolet text-[calc(12.5rem/16)] uppercase tracking-[0.2em]"
            >
              cvc
            </label>
            <input
              type="text"
              name="cvc"
              placeholder="e.g. 123"
              className={cn(
                "placeholder:text-icdfDarkGrayishViolet/60 focus:border-icdfGradientTo w-full rounded-lg border px-4 py-2 focus:border focus:outline-none",
                { "border-icdfRed focus:border-icdfRed": state?.errors?.cvc },
              )}
            />
            <p className={cn("text-icdfRed hidden text-[calc(12.5rem/16)]")}>
              {state?.errors?.cvc?.[0]}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-icdfVeryDarkViolet w-full rounded-lg py-3 text-white"
        >
          Confirm
        </button>
      </form>
    </div>
  )
}
