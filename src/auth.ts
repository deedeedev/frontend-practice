import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize({ email, password }) {
    if (email === "test" && password === "test") {
      return {
        name: "test",
      }
    }
    return null
  },
})

const config = {
  providers: [Google, Github, credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      console.log("pathname", pathname)
      if (pathname === "/middlewareprotected") return !!auth
      return true
    },
  },
} satisfies NextAuthConfig

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config)
