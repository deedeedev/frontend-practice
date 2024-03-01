"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import Image from "next/image"
import { nswsmHandleForm } from "@/app/lib/actions"

import illustrationMobile from "./illustration-sign-up-mobile.svg"
import illustrationDesktop from "./illustration-sign-up-desktop.svg"
import listIcon from "./icon-list.svg"
import successIcon from "./icon-success.svg"

export default function NewsLetterSignupWithSuccessMessage() {
  const [state, dispatch] = useFormState(nswsmHandleForm, null)

  return (
    <div className="flex w-full flex-col rounded-xl bg-white">
      <form action={dispatch}></form>
    </div>
  )
}
