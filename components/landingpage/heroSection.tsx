"use client"
import Footer from "./footer"
import { Navbar } from "./navbar"
import { motion } from "framer-motion"
import Image from "next/image"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Skills } from "./skills"
import PricingPage from "./pricing"
import { FAQSection } from "./faq"
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
          className="flex items-center justify-center mt-28 mb-28 text-black dark:text-white"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
            <motion.h1 className="text-4xl md:text-7xl font-sans font-bold" variants={itemVariants}>
              Optimize Your Workflow
              <br />
              with Cutting-Edge Solutions
            </motion.h1>
            <motion.p
              className="max-w-4xl mx-auto font-medium text-zinc-700 dark:text-zinc-200 md:text-xl"
              variants={itemVariants}
            >
              Meet our AI-powered SaaS solution to lighten your workload, increase efficiency and make more accurate
              decisions.
            </motion.p>
            <motion.div className="flex justify-center items-center gap-4" variants={itemVariants}>
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300 shadow-lg shadow-amber-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 px-6 py-3 font-semibold rounded-3xl hover:bg-white/10 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.button>
            </motion.div>
            <motion.div
              className="m-4 p-4 bottom-4 w-full z-20 text-center text-sm text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              <p className="flex justify-center gap-4">
                <span className="text-amber-400">✓</span> No credit card
                <span className="text-amber-400">✓</span> 14-day trial
                <span className="text-amber-400">✓</span> Cancel anytime
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[100px] bg-amber-600/50 blur-[100px] -z-10" />
          <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] bg-neutral-900/60 shadow-2xl backdrop-blur-md mx-auto mt-8 overflow-hidden">
            <Image src="/hero.webp"
              alt="AI-powered SaaS Dashboard"
              fill className="rounded-lg object-cover"
              priority
            />
            <BorderBeam className="absolute top-0 left-0 w-full h-full z-30" />
            <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
          </div>


        </motion.div>

        <div className="opacity-10 mb-5" />
      </div>

      <motion.div
        className="mt-12 p-12 mb-12 opacity-55"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.div>

      <motion.section
        className="px-6 py-12 h-100 rounded-2xl pb-12 mb-12 w-300 border-2 border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-800/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden flex items-center justify-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {/* Section glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r dark:from-gray-700 from-gray-100 via-gray-200 dark:via-gray-800 to-gray-300 dark:to-gray-900 rounded-2xl" />

        <div className="max-w-6xl w-full flex items-center justify-center relative z-10">
          <motion.h2
            className="text-5xl text-center md:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to take your project to the{" "}
            <span className="text-amber-500 font-serif relative">
              next level
              <motion.div
                className="absolute -inset-2 bg-amber-500/20 blur-lg rounded-lg -z-10"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
            ?
          </motion.h2>
        </div>
      </motion.section>

      <PricingPage />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default HeroSection
