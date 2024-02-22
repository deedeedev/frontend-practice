import { Red_Hat_Display } from "next/font/google"
import OrderSummaryCard from "@/components/OrderSummaryCard/OrderSummaryCard"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

export default function Page() {
  return (
    <div
      className={`${redHatDisplay.className} bg-oscPaleBlue text-oscDesaturatedBlue flex min-h-dvh w-full items-center justify-center text-[16px]`}
    >
      <OrderSummaryCard />
    </div>
  )
}
