import { Karla } from "next/font/google"
import SinglePriceGrid from "@/components/SinglePriceGrid/SinglePriceGrid"

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] })

export default function Page() {
  return (
    <div
      className={`${karla.className} bg-spgcLightGray text-spgcGrayishBlue flex min-h-dvh w-full items-center justify-center text-[16px]`}
    >
      <SinglePriceGrid />
    </div>
  )
}
