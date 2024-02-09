import { Overpass } from "next/font/google"

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] })

export default function InteractiveRatingComponent() {
  return <div className={`${overpass.className}`}>Hello, World!</div>
}
