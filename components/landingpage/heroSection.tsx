"use client"

import { CardHoverEffectDemo } from "../ui/card"
import { Navbar } from "../navbar"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { motion } from "framer-motion"

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
    <div className="">
      <div className=" bg-gradient-to-t from-[#48270d] via-[#0c0c0c] to-[#0c0c0c]">
        <Navbar />
        <BackgroundBeamsWithCollision>
          <motion.section
            className="flex items-center  justify-center h-screen text-black dark:text-white"
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
              <h1 className="text-4xl md:text-7xl font-sans font-bold">
                Optimize Your Workflow
                <br />
                with Cutting-Edge Solutions
              </h1>
              <p className="max-w-4xl mx-auto font-medium text-primary md:text-xl">
                Lorem ipsum dolor Quasi enim illum quod odit veritatis fugit reprehenderit, neque, magnam quas officiis inventore excepturi, deleniti earum hic voluptatum laudantium ratione omnis sit.
              </p>
              <div className="flex justify-center items-center gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300">
                  Start Free Trial
                </button>
                <button className="border-b text-white px-6 py-3 font-semibold rounded-3xl  ">
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.section>
        </BackgroundBeamsWithCollision>
        <div className="relative z-10 h-180 w-320 border-b-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8">
          <div>

          </div>
        </div>
      </div>

      <motion.section
        className="px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-6"
            variants={itemVariants}
          >
            Check Out My Latest Work
          </motion.h2>
          <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
            <CardHoverEffectDemo />
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default HeroSection
