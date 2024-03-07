import Image from "next/image"
import Link from "next/link"

export default function NotificationAvatar({
  name,
  img,
  link,
}: {
  name: string
  img: string
  link: string
}) {
  return (
    <Link href={link} aria-label={name} className="min-w-[calc(40rem/16)]">
      <Image
        src={img}
        alt={name}
        width={90}
        height={90}
        className="size-[calc(40rem/16)] rounded-full"
      />
    </Link>
  )
}
