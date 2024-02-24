"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import facebookIcon from "./icon-facebook.svg"
import pinterestIcon from "./icon-pinterest.svg"
import shareIcon from "./icon-share.svg"
import shareIconWhite from "./icon-share-white.svg"
import twitterIcon from "./icon-twitter.svg"

interface ArticlePreviewProps {
  img: StaticImageData
  user: {
    name: string
    img: StaticImageData
    date: Date
  }
}

export default function ArticlePreview({ img, user }: ArticlePreviewProps) {
  const [isSharing, setIsSharing] = useState<boolean>(false)

  return (
    <div className="@container w-full">
      <div className="@[600px]:grid @[600px]:grid-cols-[285px_1fr] @[600px]:grid-rows-[1fr_90px] @[600px]:max-w-[730px] @[600px]:gap-0 mx-auto flex max-w-[327px] flex-col gap-8 rounded-lg bg-white">
        {/* Image */}
        <div
          className="@[600px]:row-span-3 @[600px]:h-auto @[600px]:rounded-l-lg @[600px]:rounded-r-none h-[215px] overflow-hidden rounded-t-lg bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${img.src}')` }}
        ></div>
        {/* Content */}
        <div className="@[600px]:pt-6 space-y-3 px-8">
          <h1 className="text-apcVeryDarkGrayishBlue @[600px]:text-[22px] text-[16px] font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I&apos;ve got some simple tips to
            help you make any room feel complete.
          </p>
        </div>
        {/* Avatar */}
        <div className="relative flex items-center gap-4 px-8 pb-5 pt-2">
          <Image
            src={user.img}
            alt={user.name}
            className="size-10 rounded-full"
          />
          <div>
            <p className="text-apcVeryDarkGrayishBlue font-bold">{user.name}</p>
            <p className="font-light">{user.date.toDateString()}</p>
          </div>
          <div
            className={cn(
              "ml-auto flex size-8 cursor-pointer items-center justify-center rounded-full",
              {
                "bg-apcLightGrayishBlue": !isSharing,
                "bg-apcDesaturatedDarkBlue": isSharing,
              },
            )}
            onClick={() => setIsSharing(!isSharing)}
          >
            <Image src={isSharing ? shareIconWhite : shareIcon} alt="share" />
            {/* Share Menu Desktop */}
            <div
              className={cn(
                "bg-apcVeryDarkGrayishBlue @[900px]:right-auto @[600px]:flex absolute bottom-24 right-0 h-14 w-[250px] cursor-default items-center justify-center gap-4 rounded-xl opacity-0 transition duration-300",
                {
                  "@[600px]:opacity-100": isSharing,
                },
              )}
            >
              <p className="text-apcGrayishBlue text-[13px] uppercase tracking-[0.4em]">
                share
              </p>
              <Link href="#">
                <Image src={facebookIcon} alt="facebook" />
              </Link>
              <Link href="#">
                <Image src={twitterIcon} alt="twitter" />
              </Link>
              <Link href="#">
                <Image src={pinterestIcon} alt="pinterest" />
              </Link>
              <div className="border-t-apcVeryDarkGrayishBlue @[900px]:right-auto absolute right-[36px] top-[56px] h-0 w-0 border-x-[12px] border-t-[12px] border-x-transparent"></div>
            </div>
          </div>
          {/* Share Menu Mobile */}
          <div
            className={cn(
              "bg-apcVeryDarkGrayishBlue @[600px]:hidden absolute inset-0 flex items-center gap-4 px-8 opacity-0 transition duration-300",
              {
                "opacity-100": isSharing,
              },
            )}
          >
            <p className="text-apcGrayishBlue text-[13px] uppercase tracking-[0.4em]">
              share
            </p>
            <Link href="#">
              <Image src={facebookIcon} alt="facebook" />
            </Link>
            <Link href="#">
              <Image src={twitterIcon} alt="twitter" />
            </Link>
            <Link href="#">
              <Image src={pinterestIcon} alt="pinterest" />
            </Link>
            <div
              className="bg-apcDesaturatedDarkBlue ml-auto flex size-8 cursor-pointer items-center justify-center rounded-full"
              onClick={() => setIsSharing(!isSharing)}
            >
              <Image src={shareIconWhite} alt="share" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
