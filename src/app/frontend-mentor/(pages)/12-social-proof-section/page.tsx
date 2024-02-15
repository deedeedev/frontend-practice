import SocialProofCard from "@/components/SocialProofCard/SocialProofCard"
import SocialProofReviewSummary from "@/components/SocialProofReviewSummary/SocialProofReviewSummary"
import { League_Spartan } from "next/font/google"

import clsx from "clsx"

import avatarAnne from "./image-anne.jpg"
import avatarColton from "./image-colton.jpg"
import avatarIrene from "./image-irene.jpg"

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const reviews = [
  {
    stars: 5,
    source: "Reviews",
  },
  {
    stars: 5,
    source: "Report Guru",
  },
  {
    stars: 5,
    source: "BestTech",
  },
]

const cards = [
  {
    name: "Colton Smith",
    role: "Verified Buyer",
    img: avatarColton,
    text: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    name: "Irene Roberts",
    role: "Verified Buyer",
    img: avatarIrene,
    text: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    name: "Anne Wallace",
    role: "Verified Buyer",
    img: avatarAnne,
    text: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
]

export default function Page() {
  return (
    <div
      className={`${leagueSpartan.className} bg-social-proof-section-mobile md:bg-social-proof-section-desktop bg-position-social-proof-section flex min-h-screen w-full items-center justify-center overflow-hidden bg-white bg-no-repeat px-6 py-20 text-spsVeryDarkMagenta/70`}
    >
      <div className="flex max-w-5xl flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 md:gap-20">
        {/* Intro */}
        <div className="mx-auto flex w-full max-w-md flex-col space-y-6 text-center md:ml-0 md:text-left">
          <h1 className="mx-auto max-w-xs text-[50px] font-extrabold leading-10 text-spsVeryDarkMagenta md:ml-0">
            10,000+ of our users love our products.
          </h1>
          <p className="px-12 text-[18px] leading-6 md:px-0">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        {/* Stars */}
        <div className="flex w-full flex-col items-center gap-4 md:items-end">
          {reviews.map((review, i) => (
            <div
              className={clsx("w-full", {
                "lg:mr-[60px]": i === 0,
                "lg:mr-[30px]": i === 1,
                "lg:mr-0": i === 2,
              })}
              key={i}
            >
              <SocialProofReviewSummary {...review} />
            </div>
          ))}
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:justify-center">
          {cards.map((card, i) => (
            <div
              className={clsx({
                "lg:mt-0": i === 0,
                "lg:mt-[20px]": i === 1,
                "lg:mt-[40px]": i === 2,
              })}
              key={i}
            >
              <SocialProofCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
