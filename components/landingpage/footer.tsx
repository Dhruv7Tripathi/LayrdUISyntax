"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = {
  pages: [
    { name: "All Products", href: "/products" },
    { name: "Studio", href: "/studio" },
    { name: "Clients", href: "/clients" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
  ],
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  register: [
    { name: "Sign Up", href: "/signup" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export default function Footer() {
  return (
    <div>
      <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black dark:text-gray-50 text-gray-900 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        >
          {/* Mobile: Single column, Desktop: Multi-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">

            {/* Brand Section - Takes full width on mobile, 2 columns on desktop */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2 mb-6 sm:mb-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center space-x-3 mb-4 sm:mb-6"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-black dark:text-white text-black rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl border border-neutral-300 dark:border-neutral-700">
                  S
                </div>
                <span className="text-xl sm:text-2xl font-bold">Syntax</span>
              </motion.div>
              <motion.p variants={linkVariants} className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Empowering businesses with cutting-edge solutions and innovative technology.
              </motion.p>
              <motion.p variants={linkVariants} className="text-gray-400 dark:text-gray-500 text-xs mt-3">
                © 2024 Syntax. All rights reserved.
              </motion.p>
            </motion.div>

            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
                  Pages
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.pages.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Socials Section */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
                  Connect
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.socials.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal Section */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
                  Legal
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Register Section */}
              <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold dark:text-gray-100 text-gray-900 mb-2 sm:mb-3">
                  Account
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.register.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Border - Mobile only */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 sm:hidden"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Made with ❤️ for better web experiences
              </p>
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}