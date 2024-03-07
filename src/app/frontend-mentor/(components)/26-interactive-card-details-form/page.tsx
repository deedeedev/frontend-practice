import { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import InteractiveCardDetailsForm from "@/components/InteractiveCardDetailsForm/InteractiveCardDetailsForm"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] })

export const metadata: Metadata = {
  title: "Frontend Mentor: Interactive Card Details Form",
  description:
    "My solution for the Interactive Card Details Form challenge on Frontend Mentor",
  icons: "/26-interactive-card-details-form/favicon-32x32.png",
}

export default function Page() {
  return (
    <div
      className={`${spaceGrotesk.className} min-w-dvh flex w-full items-center justify-center text-[calc(18rem/16)]`}
    >
      <InteractiveCardDetailsForm />
    </div>
  )
}
