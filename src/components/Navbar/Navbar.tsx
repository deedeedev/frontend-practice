import Link from "next/link"
import { auth, signIn, signOut } from "@/auth"

export default async function Navbar() {
  const session = await auth()

  return (
    <div className="bg-gradient-t-b flex gap-2 from-slate-800 to-slate-600 p-2">
      <div className="ml-auto flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/clientpage">Client Page</Link>
        <Link href="/serverpage">Server Page</Link>
        <Link href="/middlewareprotected">Middleware Protected Page</Link>
        {session && session.user ? (
          <div className="flex gap-2">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button type="submit">Sign Out</button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  )
}
