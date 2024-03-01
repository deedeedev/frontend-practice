import Link from "next/link"

interface DesktopMenuProps {
  items: {
    name: string
    link: string
  }[]
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <ul className="flex justify-between gap-10 text-sm text-nhVeryDarkBlue lg:gap-12">
      {items.map((item, idx) => (
        <li className="hover:text-nhSoftOrange" key={idx}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
