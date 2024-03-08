import { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import ReactionNotification from "@/components/NotificationPageItems/ReactionNotification/ReactionNotification"
import FollowNotification from "@/components/NotificationPageItems/FollowNotification/FollowNotification"
import GroupNotification from "@/components/NotificationPageItems/GroupNotification/GroupNotification"
import MessageNotification from "@/components/NotificationPageItems/MessageNotification/MessageNotification"
import CommentNotification from "@/components/NotificationPageItems/CommentNotification/CommentNotification"

import notifications from "./data"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "800"],
})

export const metadata: Metadata = {
  title: "Frontend Mentor: Notifications Page",
  description:
    "My solution for the Notifications Page challenge on Frontend Mentor",
  icons: "/25-notifications-page/favicon-32x32.png",
}

export default function Page() {
  return (
    <main
      className={`${plusJakartaSans.className} flex min-h-dvh w-full items-center justify-center bg-npVeryLightGrayishBlue text-[calc(16rem/16)] text-npDarkGrayishBlue`}
    >
      {/* Container */}
      <div className="flex w-full max-w-[730px] flex-col gap-6 bg-white p-4 md:rounded-2xl md:p-8">
        {/* Top Bar */}
        <div className="flex-between flex items-baseline gap-2">
          <h1 className="text-xl font-bold text-npcVeryDarkBlueMain">
            Notifications
          </h1>
          <div className="rounded-lg bg-npBlue px-3 py-0.5 font-bold text-white">
            3
          </div>
          <div className="ml-auto text-sm text-npDarkGrayishBlue hover:text-npBlue">
            Mark all as read
          </div>
        </div>
        {/* Notifications */}
        <div className="flex flex-col gap-3">
          {notifications.map(({ type, data }: any, idx: number) => {
            switch (type) {
              case "reaction":
                return <ReactionNotification {...data} key={idx} />
              case "follow":
                return <FollowNotification {...data} key={idx} />
              case "group":
                return <GroupNotification {...data} key={idx} />
              case "message":
                return <MessageNotification {...data} key={idx} />
              case "comment":
                return <CommentNotification {...data} key={idx} />
              default:
                return null
            }
          })}
        </div>
      </div>
    </main>
  )
}
