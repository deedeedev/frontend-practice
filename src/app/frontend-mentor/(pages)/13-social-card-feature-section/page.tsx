import Image from "next/image"
import { Poppins } from "next/font/google"
import FeatureCard from "@/components/FeatureCard/FeatureCard"

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] })

export default function Page() {
  return (
    <div
      className={`${poppins.className} bg-scfsVeryLightGray text-scfsGrayishBlue flex min-h-screen w-full items-center justify-center overflow-hidden text-[15px]`}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-2xl font-extralight">
            Reliable, efficient delivery
          </p>
          <h1 className="text-scfsVeryDarkBlue mb-5 mt-2 text-2xl font-bold">
            Powered by Technology
          </h1>
          <p className="">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </div>
    </div>
  )
}
