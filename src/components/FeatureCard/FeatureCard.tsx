import Image from "next/image"

interface FeatureCardProps {
  title: string
  text: string
  color: string
  icon: string
}

export default function FeatureCard({
  title,
  text,
  color,
  icon,
}: FeatureCardProps) {
  return (
    <div
      className="flex min-h-[250px] max-w-[350px] flex-col gap-2 rounded-lg p-8 shadow-xl"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <h1 className="text-scfsVeryDarkBlue text-xl font-bold">{title}</h1>
      <p className="text-[13px]">{text}</p>
      <div className="mt-auto self-end">
        <Image src={icon} width={65} height={65} alt={title} aria-hidden />
      </div>
    </div>
  )
}
