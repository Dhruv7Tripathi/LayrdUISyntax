"use client"

import { CardHoverEffectDemo } from "../ui/card"
import Image from "next/image"
import Footer from "./footer"
import { Navbar } from "../navbar"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="bg-gradient-to-t from-[#1a0e05] via-[#0c0c0c] to-[#0c0c0c]">
      <Navbar />
      <div className="min-h-screen " style={{ marginLeft: "350px", marginRight: "350px" }}>
        <motion.section
          className="flex items-center justify-center text-black dark:text-white px-6 py-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div className="space-y-6 mt-12" variants={containerVariants}>
              <motion.h1
                className="text-4xl md:text-5xl sm:text-3xl lg:text-6xl font-bold leading-tight"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                Syntax
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                Full Stack Developer passionate about building scalable web applications and delightful user
                experiences.
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Hi, I&apos;m Phoenix! I love turning ideas into reality with code. Whether it&apos;s crafting robust backends or
                sleek frontends, I enjoy solving problems and learning new technologies. Let&apos;s build something amazing
                together!
              </motion.p>
            </motion.div>
            <motion.div
              className="flex justify-center md:justify-end"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/phoenix2.jpg"
                alt="Phoenix"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="px-6 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight"
                variants={itemVariants}
              >
                Check Out My Latest Work
              </motion.h2>
              <motion.div className="w-full" variants={itemVariants} transition={{ delay: 0.2 }}>
                <CardHoverEffectDemo />
              </motion.div>
            </div>
          </div>
        </motion.section>



        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
