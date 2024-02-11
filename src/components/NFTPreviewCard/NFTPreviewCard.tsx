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
    <div
      className={`${outfit.className} text-npcSoftBlue bg-npcVeryDarkBlueCard mx-4 flex w-[330px] flex-col justify-center gap-5 rounded-2xl p-6`}
    >
      <div className="group relative">
        <div className="bg-npcCyan/25 absolute hidden h-[282px] w-[282px] cursor-pointer items-center justify-center rounded-xl group-hover:flex">
          <Image src={viewIcon} alt="view" width={50} height={50} />
        </div>
        <Image
          src={equilibriumImg}
          alt="equilibrium"
          aria-hidden
          className="self-center rounded-xl"
          width={282}
          height={282}
        />
      </div>
      <h1 className="hover:text-npcCyan cursor-pointer text-[1.35rem] font-bold text-white">
        Equilibrium #3429
      </h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image
            src={ethereumIcon}
            alt="ethereum"
            aria-hidden
            width={10}
            height={10}
          />
          <span className="text-npcCyan font-bold">0.041 ETH</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={clockIcon}
            alt="clock"
            aria-hidden
            className=""
            width={18}
            height={18}
          />
          <span>3 days left</span>
        </div>
      </div>
      <div className="border-npcSoftBlue/25 -my-1 border-b" />
      <div className="flex items-center gap-4">
        <div className="rounded-full border">
          <Image src={avatarImg} alt="avatar" width={32} height={32} />
        </div>
        <p>
          Creation of{" "}
          <span className="hover:text-npcCyan cursor-pointer text-white">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  )
}
