"use client"
import Footer from "./footer"
import { Navbar } from "./navbar"
import { motion } from "framer-motion"
import Image from "next/image"
import { Skills } from "./skills"
import PricingPage from "./pricing"
import { FAQSection } from "./faq"
import { Process } from "./testimonial"
import { ChevronRight } from 'lucide-react';
import { Button } from "../ui/button"
import CTA from "./cta"

const HeroSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="bg-white dark:bg-black dark:text-gray-100 text-gray-900 relative">
      <Navbar />
      <div className="relative z-20">
        <motion.section
          className="flex items-center justify-center mt-16 md:mt-28 mb-16 md:mb-28 text-black dark:text-white px-4"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight"
              variants={itemVariants}
            >
              Optimize Your Workflow
              <br />
              with Cutting-Edge Solutions
            </motion.h1>
            <motion.p
              className="max-w-3xl mx-auto font-medium text-neutral-700 dark:text-neutral-400 text-base md:text-lg lg:text-xl px-2"
              variants={itemVariants}
            >
              Meet our AI-powered SaaS solution to lighten your workload, increase efficiency, and make more accurate decisions.

              Streamline your business processes with intelligent automation and actionable insights.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-amber-600 text-white px-6 py-2 font-semibold rounded-lg transition duration-300 shadow-lg shadow-amber-500/25 w-full sm:w-auto"
              >
                Start Free Trial
              </motion.button>
              <motion.div
                // whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="text-base w-full sm:w-auto bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
                >
                  Start a Demo
                  <motion.span
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ChevronRight className="ml-2 mt-1 size-4 text-amber-400 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="m-4 p-4 bottom-4 w-full z-20 text-center text-xs sm:text-sm text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              <p className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">✓</span> No credit card
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">✓</span> 14-day trial
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-amber-400">✓</span> Cancel anytime
                </span>
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative px-4"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1150px] h-[50px] sm:h-[100px] bg-orange-500 blur-[50px] sm:blur-[100px] -z-15" />
          <div className="relative z-10 rounded-2xl w-full max-w-[1300px] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-neutral-900/60 backdrop-blur-md mx-auto mt-8 overflow-hidden">
            <Image
              src="/l.webp"
              alt="AI-powered SaaS Dashboard"
              fill
              className="rounded-3xl object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 h-[200px] sm:h-[300px] md:h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
          </div>
        </motion.div>

        <div className="opacity-10 mb-5" />
      </div>

      <motion.div
        className="mt-8 md:mt-16 p-4 md:p-12 mb-12 md:mb-24 opacity-55"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.div>

      <Process />
      <PricingPage />
      <FAQSection />

      <motion.section
        className="min-h-screen max-w-9xl  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <CTA />
      </motion.section>

      <Footer />
    </div>
  )
}

export default HeroSection