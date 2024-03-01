import { Metadata } from "next"
import { Roboto } from "next/font/google"
import NewsLetterSignupWithSuccessMessage from "@/components/NewsletterSignupWithSuccessMessage/NewsletterSignupWithSuccessMessage"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Frontend Mentor: Newsletter Signup With Success Message",
  description:
    "My solution for the Newsletter Signup With Success Message challenge on Frontend Mentor",
  icons: "/24-newsletter-signup-with-success-message/favicon-32x32.png",
}

export default function Page() {
  return (
    <div
      className={`${roboto.className} bg-nswsmCharcoalGray text-nswsmDarkSlateGray flex min-h-dvh w-full items-center justify-center text-[16rem/16]`}
    >
      <NewsLetterSignupWithSuccessMessage />
    </div>
  )
}
