"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { faqData } from "@/contants"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 max-w-4xl">
      <button
        onClick={onToggle}
        className="w-full py-4 text-left flex items-center justify-between transition-colors duration-300 group"
      >
        <span className="dark:text-white text-gray-900 font-medium group-hover:text-orange-500 transition-colors">
          {question}
        </span>
        <IconChevronDown
          size={20}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 text-sm text-neutral-700 dark:text-neutral-300 px-1 ${isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
      >
        {answer}
      </div>
    </div>
  )
}

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="dark:bg-black bg-white text-gray-900 dark:text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left side (heading) */}
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Frequently{" "}
            <span className="text-orange-500 font-serif">Asked</span>
            <br /> Questions
          </h2>
        </div>

        {/* Right side (FAQ Items) */}
        <div className="space-y-4 mt-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
