import { auth } from "@/auth"

export default async function Page() {
  const session = await auth()

  if (!session || !session.user) {
    return <div className="p-5 text-red-500">You need to Sign In</div>
  }

  return <div>This is a protected server page</div>
}
