import { Red_Hat_Display } from "next/font/google"
import OrderSummaryCard from "@/components/OrderSummaryCard/OrderSummaryCard"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

export default function Page() {
  return (
    <div
      className={`${redHatDisplay.className} bg-oscPaleBlue relative flex min-h-dvh w-full items-center justify-center`}
    >
      <div className="absolute inset-x-0 top-0 bg-white text-black">
        <div className="bg-oscPaleBlue">Pale Blue</div>
        <div className="bg-oscBrightBlue">Bright Blue</div>
        <div className="bg-oscVeryPaleBlue">Very Pale Blue</div>
        <div className="bg-oscDesaturatedBlue">Desaturated Blue</div>
        <div className="bg-oscDarkBlue">Dark Blue</div>
      </div>
      <OrderSummaryCard />
    </div>
  )
}
