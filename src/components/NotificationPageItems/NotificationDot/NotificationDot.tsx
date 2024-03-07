interface NotificationDotProps {
  isRead: boolean
  children: React.ReactNode
}

export default function NotificationDot({
  isRead,
  children,
}: NotificationDotProps) {
  return (
    <div
      className={
        !isRead
          ? "after:ml-1 after:inline-block after:h-[8px] after:w-[8px] after:rounded-full after:bg-npRed after:align-baseline after:content-['']"
          : ""
      }
    >
      {children}
    </div>
  )
}
