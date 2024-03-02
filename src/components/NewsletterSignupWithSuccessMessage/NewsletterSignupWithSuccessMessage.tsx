"use client"

import { useState, useEffect } from "react"
import { useFormState } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { nswsmHandleForm } from "@/app/lib/actions"

import illustrationMobile from "./illustration-sign-up-mobile.svg"
import illustrationDesktop from "./illustration-sign-up-desktop.svg"
import successIcon from "./icon-success.svg"

export default function NewsLetterSignupWithSuccessMessage() {
  const [state, dispatch] = useFormState(nswsmHandleForm, null)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true)
    } else {
      setIsSuccess(false)
    }
  }, [state])

  return !state?.success || !isSuccess ? (
    <div className="flex min-h-dvh w-full max-w-[930px] flex-col gap-8 bg-white md:min-h-0 md:min-w-0 md:flex-row-reverse md:rounded-[calc(36rem/16)] md:py-6 md:pl-10 md:pr-6">
      <Image
        src={illustrationMobile}
        alt="newsletter"
        className="w-full rounded-b-xl md:hidden"
      />
      <Image
        src={illustrationDesktop}
        alt="newsletter"
        className="hidden w-full max-w-[400px] md:block"
      />
      {/* Content */}
      <div className="flex flex-col gap-6 px-6 md:self-center">
        <h1 className="text-[calc(38rem/16)] font-bold md:text-[calc(56rem/16)] md:font-extrabold">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="space-y-2.5">
          <li className="relative pl-9 before:absolute before:left-0 before:size-full before:bg-[url('/24-newsletter-signup-with-success-message/icon-list.svg')] before:bg-no-repeat before:content-['']">
            Product discovery and building what matters
          </li>
          <li className="relative pl-9 before:absolute before:left-0 before:size-full before:bg-[url('/24-newsletter-signup-with-success-message/icon-list.svg')] before:bg-no-repeat before:content-['']">
            Measuring to ensure updates are a success
          </li>
          <li className="relative pl-9 before:absolute before:left-0 before:size-full before:bg-[url('/24-newsletter-signup-with-success-message/icon-list.svg')] before:bg-no-repeat before:content-['']">
            And much more!
          </li>
        </ul>
        <form action={dispatch} className="space-y-5">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <label htmlFor="email" className="text-xs font-bold">
                Email address
              </label>
              {state?.errors?.email && (
                <p className="text-nswsmTomato">{state?.errors?.email?.[0]}</p>
              )}
            </div>
            <input
              type="text"
              name="email"
              placeholder="email@company.com"
              className={cn(
                "w-full rounded-lg border px-6 py-3.5 focus:outline-none",
                {
                  "focus:border-nswsmDarkSlateGray": !state?.errors?.email,
                  "border-nswsmTomato text-nswsmTomato bg-nswsmTomato/20 border":
                    state?.errors?.email,
                },
              )}
            />
          </div>
          <button
            type="submit"
            className="bg-nswsmDarkSlateGray w-full rounded-lg py-4 text-center font-bold text-white hover:bg-gradient-to-r hover:from-[hsl(346,100%,66%)] hover:to-[hsl(14,100%,61%)] hover:shadow-2xl hover:shadow-[hsl(346,100%,66%)]"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex min-h-dvh w-full flex-col gap-8 bg-white md:min-h-0 md:min-w-0 md:max-w-[505px] md:rounded-[calc(36rem/16)] md:px-16 md:py-14">
      <div className="flex min-h-dvh flex-col gap-6 px-6 pb-8 pt-24 md:min-h-0 md:gap-8 md:self-center md:p-0">
        <Image src={successIcon} alt="success" className="size-16" />
        <h1 className="text-[calc(38rem/16)] font-bold leading-[calc(56rem/16)] md:text-[calc(56rem/16)] md:font-extrabold">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <Link href="mailto:ash@loremcompany.com" className="font-bold">
            ash@loremcompany.com
          </Link>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button
          className="bg-nswsmDarkSlateGray mt-auto w-full rounded-lg py-4 text-center font-bold text-white hover:bg-gradient-to-r hover:from-[hsl(346,100%,66%)] hover:to-[hsl(14,100%,61%)] hover:shadow-2xl hover:shadow-[hsl(346,100%,66%)]"
          onClick={() => setIsSuccess(false)}
        >
          Dismiss message
        </button>
      </div>
    </div>
  )
}
