"use client"

import type React from "react"
import Footer from "./footer"
import { Navbar } from "./navbar"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Skills } from "./skills"
import { PricingCard } from "../ui/dark-gradient-pricing"
import { useEffect, useState } from "react"
import PricingPage from "./pricing"
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
    <div className="bg-white dark:bg-black dark:text-gray-100 text-gray-900 relative ">
      <Navbar />


      <div className="relative z-20">

        {/* Hero Section */}
        <motion.section
          className="flex items-center justify-center h-screen text-black dark:text-white"
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
            <motion.h1 className="text-4xl md:text-7xl font-sans font-bold" variants={itemVariants}>
              Optimize Your Workflow
              <br />
              with Cutting-Edge Solutions
            </motion.h1>
            <motion.p className="max-w-4xl mx-auto font-medium text-zinc-700 md:text-xl" variants={itemVariants}>
              Lorem ipsum dolor Quasi enim illum quod odit veritatis fugit reprehenderit, neque, magnam quas officiis
              inventore excepturi, deleniti earum hic voluptatum laudantium ratione omnis sit.
            </motion.p>
            <motion.div className="flex justify-center items-center gap-4" variants={itemVariants}>
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 font-semibold rounded-3xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="border-b text-zinc-700 px-6 py-3 font-semibold rounded-3xl hover:bg-white/10 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
              </motion.button>
            </motion.div>
            <motion.div className="m-4 p-4 bottom-4 w-full z-20 text-center text-sm text-gray-800" variants={itemVariants}>
              <p className="flex justify-center gap-4">
                <span className="text-yellow-400">✓</span> No credit card
                <span className="text-yellow-400">✓</span> 14-day trial
                <span className="text-yellow-400">✓</span> Cancel anytime
              </p>
            </motion.div>
            {/* <div className="absol ute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-500 blur-2xl rounded-full pointer-events-none z-10" /> */}
          </div>
        </motion.section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] border-b-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden">

            {/* Image in background */}
            <Image
              src="/hero.webp"
              alt="Hero Image"
              fill
              className="rounded-lg object-cover"
              priority
            />

            {/* Top glowing effect */}

            {/* Optional border beams */}
            <BorderBeam className="absolute top-0 left-0 w-full h-full z-20" />

            {/* Bottom fade-out gradient */}
            <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-neutral-900 to-transparent z-10" />
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
        className="px-6 py-12 h-100 rounded-2xl pb-12 mb-12 w-300 border-2 border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100/40 dark:bg-neutral-800/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl w-full flex items-center justify-center">
          <motion.h2
            className="text-5xl text-center md:text-4xl font-bold text-gray-800 dark:text-gray-100leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to take your project to the <span className="text-amber-500 font-serif">next level</span>?
          </motion.h2>
        </div>
      </motion.section>
      <PricingPage />
      <Footer />
    </div>
  )
}

export default HeroSection
