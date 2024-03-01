"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

import menuIcon from "./icon-menu.svg"
import menuCloseIcon from "./icon-menu-close.svg"

interface MobileMenuProps {
  items: {
    name: string
    link: string
  }[]
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "scroll"
    }
  }, [isOpen])

  return (
    <>
      <Image
        src={menuIcon}
        alt="menu"
        className="h-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={cn(
          "fixed -right-2/3 top-0 z-10 flex h-full w-2/3 flex-col gap-28 bg-nhOffWhite p-6 text-nhVeryDarkBlue transition-[right] duration-300",
          {
            "right-0": isOpen,
          },
        )}
      >
        <Image
          src={menuCloseIcon}
          alt="close"
          onClick={() => setIsOpen(false)}
          className="self-end"
        />
        <ul className="flex flex-col gap-5 text-lg">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn("fixed left-0 top-0 hidden h-full w-full bg-black/50", {
          block: isOpen,
        })}
      ></div>
    </>
  )
}
