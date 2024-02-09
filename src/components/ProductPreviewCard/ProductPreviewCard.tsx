import { Montserrat } from "next/font/google"
import { Fraunces } from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] })
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] })

export default function ProductPreviewCard() {
  return <div>Hello, World!</div>
}
