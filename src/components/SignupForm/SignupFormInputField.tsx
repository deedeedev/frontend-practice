"use client"

import { useState } from "react"
import Image from "next/image"
import errorIcon from "./icon-error.svg"
import { cn } from "@/lib/utils"

interface SignupFormInputFieldProps {
  name: string
  label: string
  errors: string[] | undefined
}

export default function SignupFormInputField({
  name,
  label,
  errors,
}: SignupFormInputFieldProps) {
  const [value, setValue] = useState<string>("")

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          name={name}
          placeholder={label}
          value={value}
          className={cn(
            "w-full rounded border p-4 text-[14px] font-semibold text-gray-700 placeholder:text-[14px] placeholder:font-semibold placeholder:text-gray-500 focus:border-gray-700 focus:outline-none",
            {
              "text-red-500": errors && value,
            },
          )}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <div
          className={cn("absolute right-6 top-0 h-full", {
            hidden: !errors,
            "flex items-center": errors,
          })}
        >
          <Image src={errorIcon} alt="error" />
        </div>
      </div>
      <div
        className={cn("mt-2 text-right text-xs italic text-red-500", {
          hidden: !errors,
        })}
      >
        {errors?.[0]}
      </div>
    </div>
  )
}
