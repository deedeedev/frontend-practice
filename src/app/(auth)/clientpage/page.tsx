"use client"

import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session } = useSession()

  if (!session || !session.user) {
    return <div className="p-5 text-red-500">You need to Sign In</div>
  }

  return <div>This is a protected client page</div>
}
