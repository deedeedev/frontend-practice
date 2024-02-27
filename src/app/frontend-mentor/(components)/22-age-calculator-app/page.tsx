import AgeCalculatorApp from "@/components/AgeCalculatorApp/AgeCalculatorApp"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] })

export default function Page() {
  return (
    <div
      className={`${poppins.className} bg-acaLightGray flex min-h-dvh w-full items-center justify-center text-[32px] text-black`}
    >
      <AgeCalculatorApp />
    </div>
  )
}
