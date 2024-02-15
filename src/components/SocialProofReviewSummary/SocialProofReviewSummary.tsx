import Image from "next/image"

import starIcon from "./icon-star.svg"
import clsx from "clsx"

// background: dark grayish magenta

interface SocialProofReviewSummaryProps {
  stars: number
  source: string
}

export default function SocialProofReviewSummary({
  stars,
  source,
}: SocialProofReviewSummaryProps) {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-2 rounded-lg bg-spsDarkGrayishMagenta/10 p-3 text-spsVeryDarkMagenta md:mr-0 lg:w-auto lg:max-w-md lg:flex-row lg:justify-center lg:gap-8 lg:px-12">
      <div className="flex gap-2">
        {Array(stars)
          .fill(null)
          .map((_, i) => (
            <Image
              src={starIcon}
              alt="star"
              aria-hidden
              key={i}
              className="h-4 w-4"
            />
          ))}
      </div>
      <div className="text-[16px] font-bold">
        Rated {stars} Stars in {source}
      </div>
    </div>
  )
}
