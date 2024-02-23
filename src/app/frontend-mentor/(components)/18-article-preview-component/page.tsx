import { Manrope } from "next/font/google"
import ArticlePreview from "@/components/ArticlePreview/ArticlePreview"
import ColorPalette from "@/components/ColorPalette/ColorPalette"

const colors = [
  { name: "Very Dark Grayish Blue", value: "hsl(217, 19%, 35%)" },
  { name: "Desaturated Dark Blue", value: "hsl(214, 17%, 51%)" },
  { name: "Grayish Blue", value: "hsl(212, 23%, 69%)" },
  { name: "Light Grayish Blue", value: "hsl(210, 46%, 95%)" },
]

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"] })

export default function Page() {
  return (
    <div
      className={`${manrope.className} text-apcGrayishBlue flex min-h-dvh w-full items-center justify-center`}
    >
      <ColorPalette colors={colors} />
      <ArticlePreview />
    </div>
  )
}
