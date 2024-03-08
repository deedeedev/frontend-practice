"use client"

import { useFormState } from "react-dom"
import Image from "next/image"
import { acaHandleForm } from "@/app/actions"
import AgeCalculatorInputField from "./AgeCalculatorInputField/AgeCalculatorInputField"

import arrowIcon from "./icon-arrow.svg"

export default function AgeCalculatorApp() {
  const [state, dispatch] = useFormState(acaHandleForm, null)

  return (
    <form
      action={dispatch}
      className="container mx-auto flex w-full max-w-[550px] flex-col gap-16 rounded-3xl rounded-br-[5.5rem] bg-white px-6 py-10 text-acaOffBlack shadow-md sm:gap-8"
    >
      {/* Datepicker */}
      <div className="flex justify-start gap-2">
        <AgeCalculatorInputField
          name="day"
          label="day"
          placeholder="dd"
          errors={state?.errors?.day}
        />
        <AgeCalculatorInputField
          name="month"
          label="month"
          placeholder="mm"
          errors={state?.errors?.month}
        />
        <AgeCalculatorInputField
          name="year"
          label="year"
          placeholder="yyyy"
          errors={state?.errors?.year}
        />
      </div>
      {/* Separator */}
      <div className="relative">
        <hr />
        <button
          type="submit"
          className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-acaPurple p-4 hover:bg-acaOffBlack sm:right-0 sm:translate-x-0"
        >
          <Image src={arrowIcon} alt="submit" className="size-7" />
        </button>
      </div>
      {/* Result */}
      <div className="text-[3.1rem] font-extrabold italic leading-[1]">
        <div>
          <span className="text-acaPurple">
            {state?.success ? state?.result?.years : "--"}
          </span>
          years
        </div>
        <div>
          <span className="text-acaPurple">
            {state?.success ? state?.result?.months : "--"}
          </span>{" "}
          months
        </div>
        <div>
          <span className="text-acaPurple">
            {state?.success ? state?.result?.days : "--"}
          </span>
          days
        </div>
      </div>
    </form>
  )
}
