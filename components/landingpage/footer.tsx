"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black dark:text-gray-50 text-gray-900 overflow-hidden">
      <motion.div className="relative z-10 max-w-8xl mb-24 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* LEFT SIDE - LOGO + DESCRIPTION */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm"
          >
            <div className="flex items-center space-x-1.5 mb-4 sm:mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={30}
                className="rounded-full"
                priority
                quality={100}
              />
              <span className="text-xl sm:text-2xl font-bold">Syntax</span>
            </div>
            <motion.p
              variants={linkVariants}
              className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed"
            >
              Empowering businesses with cutting-edge solutions and innovative
              technology.
            </motion.p>
            <motion.p
              variants={linkVariants}
              className="text-gray-400 dark:text-gray-500 text-xs mt-3"
            >
              © 2024 Syntax. All rights reserved.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE - FOOTER LINK GRID */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 mr-12 gap-12 w-full lg:w-auto "
          >
            {/* Pages */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Pages</h3>
              <ul className="space-y-2 sm:space-y-1">
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
            </div>

            {/* Connect */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Connect</h3>
              <ul className="space-y-2 sm:space-y-1">
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 text-xs sm:text-sm block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 sm:space-y-1">
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
            </div>

            {/* Account */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Account</h3>
              <ul className="space-y-2 sm:space-y-1">
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
            </div>
          </motion.div>
        </div>

        {/* Mobile-only Bottom Note */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 sm:hidden"
        >
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Made with ❤️ for better web experiences
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
import { useState, useEffect } from 'react';