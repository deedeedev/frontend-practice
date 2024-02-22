"use client"

import Link from "next/link"
import SignupFormInputField from "./SignupFormInputField"
import { useFormState } from "react-dom"
import { icwsfHandleForm } from "@/app/lib/actions"

export default function SignupForm() {
  const [state, dispatch] = useFormState(icwsfHandleForm, undefined)

  return (
    <form action={dispatch} className="space-y-5 bg-white p-6">
      <SignupFormInputField
        name="firstname"
        label="First Name"
        errors={state?.errors?.firstName}
      />
      <SignupFormInputField
        name="lastname"
        label="Last Name"
        errors={state?.errors?.lastName}
      />
      <SignupFormInputField
        name="email"
        label="Email Address"
        errors={state?.errors?.email}
      />
      <SignupFormInputField
        name="password"
        label="Password"
        errors={state?.errors?.password}
      />
      <button
        type="submit"
        className="border-icwsufDarkGreen w-full rounded border-x border-y-2 bg-icwsufGreen p-4 font-semibold uppercase hover:brightness-125"
      >
        {state?.success ? "thank you!" : "claim your free trial"}
      </button>
      <p className="text-balance text-center text-[10px] text-gray-400">
        By clicking the button, you are agreeing to our{" "}
        <Link href="#" className="font-semibold text-red-500">
          Terms and Services
        </Link>
      </p>
    </form>
  )
}
