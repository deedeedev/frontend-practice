import Image from "next/image"

interface SocialProofCardProps {
  name: string
  role: string
  picture: typeof Image
}

// background: very dark magenta
// role: soft pink

export default function SocialProofCard({
  name,
  role,
  picture,
}: SocialProofCardProps) {
  return <div>Hello, World!</div>
}
