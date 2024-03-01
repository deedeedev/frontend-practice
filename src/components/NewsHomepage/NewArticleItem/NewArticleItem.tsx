import Link from "next/link"

interface NewArticleItemProps {
  title: string
  text: string
  href: string
  isLast: boolean
}

export default function NewArticleItem({
  title,
  text,
  href,
  isLast,
}: NewArticleItemProps) {
  return (
    <div className={isLast ? "pt-7" : "border-b border-nhDarkGrayishBlue py-7"}>
      <h1 className="mb-2 text-xl font-bold text-white hover:text-nhSoftOrange">
        <Link href={href}>{title}</Link>
      </h1>
      <p>{text}</p>
    </div>
  )
}
