import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import NotificationAvatar from "../NotificationAvatar/NotificationAvatar"

export interface NotificationProps {
  isRead: boolean
  time: string
  user: {
    name: string
    img: string
    link: string
  }
  text?: string
  img?: string
  imgLink?: string
  children: React.ReactNode
}

export default function Notification({
  isRead,
  time,
  user,
  children,
  text,
  img,
  imgLink,
}: NotificationProps) {
  return (
    <div
      className={cn(
        "flex gap-3.5 rounded-lg p-3.5 text-sm",
        isRead ? "white" : "bg-npcSoftBlue/10",
      )}
    >
      <NotificationAvatar {...user} />
      <div className="flex flex-col gap-0.5">
        {children}
        <div className="text-npGrayishBlue">{time} ago</div>
        {text && (
          <div className="mt-2 rounded-md border p-4 hover:bg-npcSoftBlue/30">
            {text}
          </div>
        )}
      </div>
      {img && imgLink && (
        <Link href={imgLink} className="ml-auto">
          <Image
            src={img}
            alt={user.name}
            width={55}
            height={55}
            className="rounded-lg border-npcSoftBlue hover:border-2"
          />
        </Link>
      )}
    </div>
  )
}
