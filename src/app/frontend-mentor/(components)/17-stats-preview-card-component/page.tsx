import { Inter, Lexend_Deca } from "next/font/google"

import StatsPreviewCard from "@/components/StatsPreviewCard/StatsPreviewCard"
import ColorPalette from "@/components/ColorPalette/ColorPalette"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })
const lexendDeca = Lexend_Deca({ subsets: ["latin"], weight: ["400"] })

const colors = [
  { name: "Very Dark Blue", value: "hsl(233, 47%, 7%)" },
  { name: "Dark Desaturated Blue", value: "hsl(244, 38%, 16%)" },
  { name: "Soft Violet", value: "hsl(277, 64%, 61%)" },
  { name: "Slightly Transparent White 1", value: "hsla(0, 0%, 100%, 0.75)" },
  { name: "Slightly Transparent White 2", value: "hsla(0, 0%, 100%, 0.6)" },
]

export default function Page() {
  return (
    <div
      className={`${inter.className} bg-spccVeryDarkBlue flex min-h-dvh w-full items-center justify-center text-[15px]`}
    >
      <ColorPalette colors={colors} />
      <StatsPreviewCard />
    </div>
  )
}
