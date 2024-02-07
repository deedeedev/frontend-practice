"use client"

import { useState } from "react"
import Image from "next/image"
import { Work_Sans } from "next/font/google"

import starIcon from "./icon-star.svg"
import plusIcon from "./icon-plus.svg"
import minusIcon from "./icon-minus.svg"

const workSans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

const questions = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex aliquam. Ea, sequi quis molestiae, rerum suscipit cumque minima ullam voluptates consectetur distinctio, optio eveniet sed perspiciatis adipisci explicabo labore.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati maiores veritatis natus! Consequatur architecto in reiciendis, corrupti, ratione nisi voluptate debitis quos odit qui natus sed ab aliquam repellat.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque explicabo reiciendis exercitationem temporibus. Tempore voluptates exercitationem porro, fuga ex amet tempora quae, consequuntur commodi vitae deleniti earum magnam praesentium!",
  },
]

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div
      className={`${workSans.className} container max-w-sm rounded-xl bg-faqWhite p-6 text-faqDarkPurple`}
    >
      {/* Title */}
      <div className="flex items-center gap-6">
        <Image
          src={starIcon}
          aria-hidden="true"
          alt="star"
          className="h-6 w-6"
        />
        <h1 className="text-3xl font-bold">FAQs</h1>
      </div>
      {/* Questions */}
      <div className="flex flex-col space-y-6 divide-y">
        {questions.map(({ question, answer }, idx) => (
          <div key={idx}>
            <div
              className="mt-6 flex items-center justify-between hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              <h2 className="hover:text-faqPurple text-lg font-bold leading-6 text-faqDarkPurple">
                {question}
              </h2>
              {/* Toggle Button */}
              <Image
                src={activeIndex === idx ? minusIcon : plusIcon}
                alt="toggle question"
              />
            </div>
            {/* Answer */}
            <p
              className={`mt-6 text-faqGrayishPurple transition-all duration-300 ${activeIndex === idx ? "block" : "hidden"}`}
            >
              {answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
