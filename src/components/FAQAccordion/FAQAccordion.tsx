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

interface FAQAccordionProps {
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [answerHeights, setAnswerHeights] = useState<number[]>(
    Array(questions.length).fill(0),
  )

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
    const newAnswerHeights = Array(questions.length).fill(0)
    if (activeIndex !== idx)
      newAnswerHeights[idx] = document.getElementById(
        `answer-${idx}`,
      )?.scrollHeight
    setAnswerHeights(newAnswerHeights)
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
      <div className="flex flex-col divide-y">
        {questions.map(({ question, answer }, idx) => (
          <div key={idx} className="py-6">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              <h2 className="text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple">
                {question}
              </h2>
              {/* Toggle Button */}
              <Image
                src={activeIndex === idx ? minusIcon : plusIcon}
                alt="toggle question"
              />
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
            >
              <p className="pt-6 text-faqGrayishPurple">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
