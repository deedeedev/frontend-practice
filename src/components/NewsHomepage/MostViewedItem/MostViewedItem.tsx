import Image from "next/image"
import { leftPad } from "@/lib/utils"

interface MostViewedItemProps {
  idx: number
  title: string
  text: string
  img: string
}

export default function MostViewedItem({
  idx,
  title,
  text,
  img,
}: MostViewedItemProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={img}
        alt={title}
        width={100}
        height={250}
        className="self-start"
      />
      <div className="flex flex-col justify-start">
        <div className="text-3xl font-bold text-nhGrayishBlue">
          {leftPad(String(idx), 2, "0")}
        </div>
        <h1 className="text-lg font-bold text-nhVeryDarkBlue">{title}</h1>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  )
}
