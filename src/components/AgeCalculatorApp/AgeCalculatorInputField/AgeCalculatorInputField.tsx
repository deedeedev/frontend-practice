import { useState } from "react"
import { cn } from "@/lib/utils"

interface AgeCalculatorInputFieldProps {
  name: string
  label: string
  placeholder: string
  errors?: string[]
}

export default function AgeCalculatorInputField({
  name,
  label,
  placeholder,
  errors,
}: AgeCalculatorInputFieldProps) {
  const [value, setValue] = useState<string>("")

  return (
    <div className="max-w-[8rem]">
      <label
        htmlFor={name}
        className="text-acaSmokeyGray text-[.75rem] font-bold uppercase placeholder:font-bold"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="placeholder:text-acaSmokeyGray focus:border-acaPurple w-full rounded-lg border px-3 py-2 font-bold outline-none placeholder:text-xl placeholder:uppercase"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <p
        className={cn("mt-1 text-xs italic text-red-500", {
          hidden: !errors,
        })}
      >
        {errors?.[0]}
      </p>
    </div>
  )
}
