'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Themetoggle } from '../ui/themetoggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }
    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "w-full transition-all sticky top-0 z-50 duration-300",
          isScrolled
            ? "border-b border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-200/40 dark:bg-neutral-900/40 shadow-lg backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none",
        )}
      >
        <div className="container flex items-center justify-between mx-auto px-4 py-3">
          <motion.div
            className="flex items-center space-x-1.5"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={30}
              className="rounded-full mt-1"
              priority
              quality={100}
            />

            <span className="text-xl md:text-2xl font-bold">Syntax</span>
          </motion.div>

          <div className="hidden lg:flex text-gray-800 dark:text-gray-200 text-sm justify-center items-center font-semibold space-x-6 flex-1">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>

          <div className='hidden lg:flex items-center space-x-4'>
            <Themetoggle />
            <button className='dark:hover:bg-neutral-900 hover:bg-neutral-200 rounded-full py-2 px-4 transition-colors'>
              Login
            </button>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors'>
              Sign Up
            </button>
          </div>

          <div className='flex lg:hidden items-center space-x-3'>
            <Themetoggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-black border-l border-neutral-200 dark:border-neutral-800 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white dark:bg-black dark:text-white text-black rounded-lg flex items-center justify-center font-bold text-lg border border-neutral-300 dark:border-neutral-700">
                    S
                  </div>
                  <span className="text-xl font-bold">Syntax</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Navigation */}
              <div className="flex flex-col space-y-1 p-4 flex-1">
                <a
                  href="#home"
                  className="text-gray-800 dark:text-gray-200 hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-3 rounded-lg transition-all font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-800 dark:text-gray-200 hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-3 rounded-lg transition-all font-medium"
                  onClick={handleMobileMenuClick}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-800 dark:text-gray-200 hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-3 rounded-lg transition-all font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 dark:text-gray-200 hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-3 rounded-lg transition-all font-medium"
                  onClick={handleMobileMenuClick}
                >
                  Contact
                </a>
              </div>

              {/* Mobile Menu Footer - Auth Buttons */}
              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <button
                  className='w-full dark:hover:bg-neutral-900 hover:bg-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-full py-3 px-4 transition-colors font-medium'
                  onClick={handleMobileMenuClick}
                >
                  Login
                </button>
                <button
                  className='w-full bg-orange-500 text-white px-4 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium'
                  onClick={handleMobileMenuClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};