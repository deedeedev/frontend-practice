import Link from "next/link"
import { NotificationProps } from "../Notification/Notification"
import Notification from "../Notification/Notification"
import NotificationDot from "../NotificationDot/NotificationDot"

export type FollowNotificationProps = NotificationProps

export default function FollowNotification({
  isRead,
  time,
  user,
}: FollowNotificationProps) {
  return (
    <Notification {...{ isRead, time, user }}>
      <NotificationDot isRead={isRead}>
        <Link
          href={user.link}
          className="mr-1 font-bold text-black hover:text-npBlue"
        >
          {user.name}
        </Link>{" "}
        followed you
      </NotificationDot>
    </Notification>
  )
}
