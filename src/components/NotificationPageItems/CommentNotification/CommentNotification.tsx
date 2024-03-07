import Link from "next/link"
import { NotificationProps } from "../Notification/Notification"
import Notification from "../Notification/Notification"
import NotificationDot from "../NotificationDot/NotificationDot"

export interface CommentNotificationProps extends NotificationProps {
  img: string
  imgLink: string
}

export default function CommentNotification({
  isRead,
  time,
  user,
  img,
  imgLink,
}: CommentNotificationProps) {
  return (
    <Notification {...{ isRead, time, user, img, imgLink }}>
      <NotificationDot isRead={isRead}>
        <Link
          href={user.link}
          className="mr-1 font-bold text-black hover:text-npBlue"
        >
          {user.name}
        </Link>{" "}
        commented on your picture
      </NotificationDot>
    </Notification>
  )
}
