import { Poppins } from "next/font/google"
import FeatureCard from "@/components/FeatureCard/FeatureCard"
import clsx from "clsx"

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] })

const features = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    color: "hsl(180, 62%, 55%)",
    icon: "/13-four-card-feature-section/icon-supervisor.svg",
  },
  {
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    color: "hsl(0, 78%, 62%)",
    icon: "/13-four-card-feature-section/icon-team-builder.svg",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    color: "hsl(34, 97%, 64%)",
    icon: "/13-four-card-feature-section/icon-karma.svg",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    color: "hsl(212, 86%, 64%)",
    icon: "/13-four-card-feature-section/icon-calculator.svg",
  },
]

export default function Page() {
  return (
    <section
      className={`${poppins.className} bg-scfsVeryLightGray text-scfsGrayishBlue flex min-h-screen w-full items-center justify-center overflow-hidden px-8 py-20 text-[15px]`}
    >
      {/* Content */}
      <div className="flex flex-col gap-16">
        {/* Intro */}
        <div className="mx-auto max-w-[315px] text-center md:max-w-lg">
          <p className="text-scfsVeryDarkBlue text-2xl font-light md:text-4xl">
            Reliable, efficient delivery
          </p>
          <h1 className="text-scfsVeryDarkBlue mb-5 mt-2 text-2xl font-bold md:text-4xl">
            Powered by Technology
          </h1>
          <p className="text-[16px]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        {/* Cards */}
        <div className="grid items-center justify-center gap-6 md:grid-cols-3 md:grid-rows-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className={clsx({
                "md:row-span-full": i === 0 || i === 3,
                "md:col-start-3": i === 3,
              })}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
