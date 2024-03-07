import Link from "next/link"
import { NotificationProps } from "../Notification/Notification"
import Notification from "../Notification/Notification"
import NotificationDot from "../NotificationDot/NotificationDot"

export interface ReactionNotificationProps extends NotificationProps {
  postTitle: string
  postLink: string
}

export default function ReactionNotification({
  isRead,
  time,
  user,
  postTitle,
  postLink,
}: ReactionNotificationProps) {
  return (
    <Notification {...{ isRead, time, user }}>
      <NotificationDot isRead={isRead}>
        <Link
          href={user.link}
          className="mr-1 font-bold text-black hover:text-npBlue"
        >
          {user.name}
        </Link>{" "}
        reacted to your recent post{" "}
        <Link href={postLink} className="font-semibold hover:text-npBlue">
          {postTitle}
        </Link>
      </NotificationDot>
    </Notification>
  )
}
