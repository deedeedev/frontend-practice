"use client"

import Image from "next/image"
import { useFormState } from "react-dom"
import { bacspHandleForm } from "@/app/lib/actions"
import { cn } from "@/lib/utils"

import arrowIcon from "./icon-arrow.svg"
import errorIcon from "./icon-error.svg"

export default function BACSPForm() {
  const initialState = { message: null, errors: { email: [] } }
  const [state, dispatch] = useFormState(bacspHandleForm, initialState)

  return (
    <form
      action={dispatch}
      className="flex flex-col items-center justify-center lg:items-start"
    >
      <div className="relative">
        <input
          type="text"
          name="email"
          className="min-w-[20rem] rounded-full border border-bacspDesaturatedRed px-5 py-3 text-sm placeholder:text-bacspDesaturatedRed focus:outline-none xl:min-w-[24rem]"
          placeholder="Email Address"
        />
        <div
          className={cn("absolute right-20 top-0 h-full lg:right-24", {
            hidden: state.errors.email?.length === 0,
            "flex items-center justify-center": state.errors.email?.length,
          })}
        >
          <Image src={errorIcon} alt="error" />
        </div>
        <button
          type="submit"
          className="absolute right-0 top-0 flex h-full w-16 items-center justify-center rounded-full bg-gradient-to-br from-bacspGradient2From to-bacspGradient2To shadow-lg shadow-bacspDesaturatedRed hover:brightness-125 lg:w-20"
        >
          <Image src={arrowIcon} alt="submit" />
        </button>
      </div>
      <div id="email-error" className="w-full text-left">
        {state.errors.email &&
          state.errors.email.map((error: string, i: number) => (
            <p className="ml-5 mt-2 text-sm text-red-500" key={i}>
              {error}
            </p>
          ))}
      </div>
    </form>
  )
}
