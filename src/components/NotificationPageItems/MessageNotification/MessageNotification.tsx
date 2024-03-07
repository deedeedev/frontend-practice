import Link from "next/link"
import { NotificationProps } from "../Notification/Notification"
import Notification from "../Notification/Notification"
import NotificationDot from "../NotificationDot/NotificationDot"

export interface MessageNotificationProps extends NotificationProps {
  text: string
}

export default function MessageNotification({
  isRead,
  time,
  user,
  text,
}: MessageNotificationProps) {
  return (
    <>
      <Notification {...{ isRead, time, user, text }}>
        <NotificationDot isRead={isRead}>
          <Link
            href={user.link}
            className="mr-1 font-bold text-black hover:text-npBlue"
          >
            {user.name}
          </Link>{" "}
          sent you a private message
        </NotificationDot>
      </Notification>
    </>
  )
}
