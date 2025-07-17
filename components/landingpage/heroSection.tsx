"use client"

import type React from "react"
import Footer from "./footer"
import { Navbar } from "../navbar"
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
    <div className="bg-white text-gray-900 relative ">
      {/* Animated Beams */}
      <Navbar />


      <div className="relative z-20">
        <BackgroundBeamsWithCollision>

          {/* Hero Section */}
          <motion.section
            className="flex items-center justify-center h-screen text-black "
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
              <motion.div className="m-4 p-4 bottom-4 w-full z-20 text-center text-sm text-white" variants={itemVariants}>
                <p className="flex justify-center gap-4">
                  <span className="text-yellow-400">✓</span> No credit card
                  <span className="text-yellow-400">✓</span> 14-day trial
                  <span className="text-yellow-400">✓</span> Cancel anytime
                </p>
              </motion.div>
            </div>
          </motion.section>
        </BackgroundBeamsWithCollision>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] border-b-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden">
            <Image
              src="/hero.webp"
              alt="Hero Image"
              fill
              className="rounded-lg shadow-amber-500 object-cover"
              priority
            />
            <BorderBeam className="absolute top-0 left-0 w-full h-full" />
            <div className="absolute bottom-0 left-0 h-[40px] w-full [background-image:linear-gradient(to_top,theme(colors.background)_60%,transparent_100%)]" />
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
        className="px-6 py-12 h-100 rounded-2xl pb-12 mb-12 w-300 border-2 border-neutral-800/50 bg-neutral-900/40 shadow-lg backdrop-blur-md mx-auto mt-8 overflow-hidden flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl w-full flex items-center justify-center">
          <motion.h2
            className="text-5xl text-center md:text-4xl font-bold text-white leading-tight mb-6"
            variants={itemVariants}
          >
            Ready to take your project to the <span className="text-amber-500 font-serif">next level</span>?
          </motion.h2>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <PricingPage />
      {/* <motion.section
        className="relative overflow-hidden bg-[#0c0c0c] text-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
          <motion.div
            className="mb-12 space-y-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Pricing
            </h2>
            <p className="text-center text-base text-muted-foreground md:text-lg">
              Use it for free for yourself, upgrade when your team needs advanced control.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <PricingCard
                tier="Free"
                price="$0/mo"
                bestFor="Best for 1-5 users"
                CTA="Get started free"
                benefits={[
                  { text: "One workspace", checked: true },
                  { text: "Email support", checked: true },
                  { text: "1 day data retention", checked: false },
                  { text: "Custom roles", checked: false },
                  { text: "Priority support", checked: false },
                  { text: "SSO", checked: false },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PricingCard
                tier="Pro"
                price="$79/mo"
                bestFor="Best for 5-50 users"
                CTA="14-day free trial"
                benefits={[
                  { text: "Five workspaces", checked: true },
                  { text: "Email support", checked: true },
                  { text: "7 day data retention", checked: true },
                  { text: "Custom roles", checked: true },
                  { text: "Priority support", checked: false },
                  { text: "SSO", checked: false },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <PricingCard
                tier="Enterprise"
                price="Contact us"
                bestFor="Best for 50+ users"
                CTA="Contact us"
                benefits={[
                  { text: "Unlimited workspaces", checked: true },
                  { text: "Email support", checked: true },
                  { text: "30 day data retention", checked: true },
                  { text: "Custom roles", checked: true },
                  { text: "Priority support", checked: true },
                  { text: "SSO", checked: true },
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section> */}
      <Footer />
    </div>
  )
}

export default HeroSection
