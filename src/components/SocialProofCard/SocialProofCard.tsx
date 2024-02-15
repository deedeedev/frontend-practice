import Image, { StaticImageData } from "next/image"

interface SocialProofCardProps {
  name: string
  role: string
  img: StaticImageData
  text: string
}

// background: very dark magenta
// role: soft pink

export default function SocialProofCard({
  name,
  role,
  img,
  text,
}: SocialProofCardProps) {
  return (
    <div className="flex min-h-[15rem] max-w-sm flex-col gap-6 rounded-lg bg-spsVeryDarkMagenta p-6 text-white">
      <div className="flex items-center gap-3">
        <Image
          src={img}
          alt="avatar"
          aria-hidden
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <div className="font-bold">{name}</div>
          <div className="text-spsSoftPink">{role}</div>
        </div>
      </div>
      <div className="font-bold">&ldquo; {text} &rdquo;</div>
    </div>
  )
}
