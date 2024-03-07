"use client"

import { useFormState } from "react-dom"
import Image from "next/image"
import { icdfHandleForm } from "@/app/lib/actions"

import cardLogo from "./card-logo.svg"
import completeIcon from "./icon-complete.svg"

export default function InteractiveCardDetailsForm() {
  const [state, dispatch] = useFormState(icdfHandleForm, null)

  return (
    <div>
      <form action={dispatch}></form>
    </div>
  )
}
