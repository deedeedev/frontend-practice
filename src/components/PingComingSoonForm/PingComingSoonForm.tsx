"use client"

import { useFormState } from "react-dom"
import { psccspHandleForm } from "@/app/actions"
import { cn } from "@/lib/utils"

export default function PingComingSoonForm() {
  const [state, dispatch] = useFormState(psccspHandleForm, null)

  return (
    <form action={dispatch} className="flex w-full flex-col gap-3 sm:flex-row">
      <div className="flex w-full flex-col gap-1">
        <input
          type="text"
          name="email"
          placeholder="Your email address..."
          className={cn(
            "h-[40px] w-full rounded-full border px-4 py-1 pl-6 text-sm text-black placeholder:text-xs focus:outline-none",
            {
              "outline outline-1 outline-red-500 focus:outline":
                state?.errors?.email,
            },
          )}
        />
        {state?.errors?.email && (
          <p className="mt-1 text-center text-xs italic text-red-500 sm:pl-6 sm:text-left">
            {state.errors.email[0]}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="h-[40px] w-full rounded-full bg-psccspBlue py-3 text-xs font-bold text-white shadow-lg hover:brightness-125 sm:max-w-44"
      >
        Notify Me
      </button>
    </form>
  )
}
