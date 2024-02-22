import { Red_Hat_Display } from "next/font/google"
import OrderSummaryCard from "@/components/OrderSummaryCard/OrderSummaryCard"

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
})

export default function Page() {
  return (
    <div
      className={`${redHatDisplay.className} bg-oscMobile flex min-h-dvh w-full items-center justify-center bg-oscPaleBlue bg-contain bg-no-repeat text-[16px] text-oscDesaturatedBlue`}
      style={{ backgroundPosition: "0px -200px" }}
    >
      <OrderSummaryCard />
    </div>
  )
}
