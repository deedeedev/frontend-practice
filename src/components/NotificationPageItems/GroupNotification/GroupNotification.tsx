import Link from "next/link"
import { NotificationProps } from "../Notification/Notification"
import Notification from "../Notification/Notification"
import NotificationDot from "../NotificationDot/NotificationDot"

export interface GroupNotificationProps extends NotificationProps {
  action: "join" | "leave"
  groupName: string
  groupLink: string
}

export default function GroupNotification({
  isRead,
  time,
  user,
  action,
  groupName,
  groupLink,
}: GroupNotificationProps) {
  return (
    <Notification {...{ isRead, time, user }}>
      <NotificationDot isRead={isRead}>
        <Link
          href={user.link}
          className="mr-1 font-bold text-black hover:text-npBlue"
        >
          {user.name}
        </Link>{" "}
        has {action === "join" ? "joined" : "left"} the group{" "}
        <Link href={groupLink} className="font-semibold hover:text-npBlue">
          {groupName}
        </Link>
      </NotificationDot>
    </Notification>
  )
}
