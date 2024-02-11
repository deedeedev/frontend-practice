import Image from "next/image"
import { Outfit } from "next/font/google"

import avatarImg from "./image-avatar.png"
import equilibriumImg from "./image-equilibrium.jpg"
import clockIcon from "./icon-clock.svg"
import ethereumIcon from "./icon-ethereum.svg"
import viewIcon from "./icon-view.svg"

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600"] })

export default function NFTPreviewCard() {
  return (
    <div className={`${outfit.className} text-npcSoftBlue`}>Hello, World!</div>
  )
}
