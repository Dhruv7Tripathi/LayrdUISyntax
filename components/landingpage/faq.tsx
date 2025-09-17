"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"
import { faqData } from "@/contants"
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index?: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <motion.div
      className="border-b border-white/10"
      layout
    >
      <motion.button
        onClick={onToggle}
        className="w-full py-4 text-left flex items-center justify-between transition-colors duration-300 group"
        whileHover={{ opacity: 0.9 }}
      >
        <span className="dark:text-white text-gray-900 font-medium dark:hover:text-orange-400 hover:text-orange-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 dark:text-white text-gray-900 dark:hover:text-orange-400 hover:text-orange-400 transition-colors"
        >
          <IconChevronDown size={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-answer"
            className="overflow-hidden text-sm text-gray-400 pb-4 px-1"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
    <section className="dark:bg-black min-h-screen bg-white flex justify-center items-center text-gray-900 dark:text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Frequently {" "}
            <span className="text-orange-500 font-serif">
              Asked
            </span>
            <br /> Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
