import { getImageProps } from "next/image"
import Link from "next/link"

interface ArticleItemProps {
  title: string
  text: string
  link: string
  images: {
    mobile: string
    desktop: string
  }
}

export default function ArticleItem({
  title,
  text,
  link,
  images,
}: ArticleItemProps) {
  const common = {
    alt: title,
  }
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 730,
    height: 300,
    quality: 80,
    src: images.desktop,
  })
  const { props } = getImageProps({
    ...common,
    width: 610,
    height: 530,
    quality: 80,
    src: images.mobile,
  })

  return (
    <article className="flex flex-col md:col-span-2 md:grid md:grid-cols-subgrid">
      <picture className="md:col-span-2">
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <img
          {...props}
          className="h-auto w-full"
          sizes="(min-width: 1180px) 708px, (min-width: 780px) calc(56.58vw + 52px), calc(100vw - 32px)"
        />
      </picture>
      <h1 className="mt-6 text-[2.7rem] font-extrabold leading-[2.7rem] text-nhVeryDarkBlue">
        {title}
      </h1>
      <div className="mt-6 flex flex-col justify-between gap-5">
        <p>{text}</p>
        <Link
          href={link}
          className="max-w-[calc(195rem/16)] bg-nhSoftRed px-4 py-3 text-center font-bold uppercase text-white hover:bg-nhVeryDarkBlue"
        >
          read more
        </Link>
      </div>
    </article>
  )
}
