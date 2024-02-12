import Image from "next/image"
import { Kumbh_Sans } from "next/font/google"

import bgImg from "./bg-pattern-card.svg"
import avatarImg from "./image-victor.jpg"

const kumbSans = Kumbh_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export default function ProfileCard() {
  return (
    <div
      className={`${kumbSans.className} z-10 mx-6 flex max-w-sm flex-col items-center rounded-xl bg-white text-[18px]`}
    >
      <Image
        src={bgImg}
        alt="background"
        aria-hidden
        className="rounded-t-xl"
      />
      <div className="-mt-[52px] flex w-full flex-col items-center gap-6">
        <div className="rounded-full bg-white p-[4px]">
          <Image
            src={avatarImg}
            alt="avatar"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <h1 className="text-pcVeryDarkDesaturatedBlue text-lg font-bold">
                Victor Crest
              </h1>
              <div className="text-pcDarkGrayishBlue font-thin">26</div>
            </div>
            <div className="text-pcDarkGray mt-1 text-center text-sm">
              London
            </div>
          </div>
          <div className="h-[1px] w-full border-t-[1px]"></div>
          <div className="mb-6 flex w-full justify-evenly">
            <div className="flex flex-col items-center gap-1">
              <div className="text-pcVeryDarkDesaturatedBlue text-[1.2rem] font-bold">
                80K
              </div>
              <div className="text-pcDarkGray text-[0.7rem] tracking-widest">
                Followers
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-pcVeryDarkDesaturatedBlue text-[1.2rem] font-bold">
                803K
              </div>
              <div className="text-pcDarkGray text-[0.7rem] tracking-widest">
                Likes
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-pcVeryDarkDesaturatedBlue text-[1.2rem] font-bold">
                1.4K
              </div>
              <div className="text-pcDarkGray text-[0.7rem] tracking-widest">
                Photos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
