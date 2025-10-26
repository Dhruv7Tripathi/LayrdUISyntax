'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Themetoggle } from './ui/themetoggle';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { SiGithub } from 'react-icons/si';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={cn("w-full bg-white dark:bg-black dark:text-gray-100 text-gray-900")}>
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <div className="flex items-center space-x-2">
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
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center  font-semibold text-sm text-gray-800 dark:text-gray-200">
            <a href="#home" className="hover:text-black dark:hover:text-white dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg py-2 transition-colors">Home</a>
            <a href="#about" className="hover:text-black dark:hover:text-white dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg py-2 transition-colors">About</a>
            <a href="#services" className="hover:text-black dark:hover:text-white dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg py-2 transition-colors">Services</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg py-2 transition-colors">Contact</a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Themetoggle />
            <SiGithub size={22} className="text-gray-800 dark:text-gray-200" />
            <Button
              variant="ghost"
              className="dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg"
            >
              Login
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">
              Sign Up
            </Button>
          </div>

          <div className="flex lg:hidden items-center space-x-3">
            <Themetoggle />
            <SiGithub size={22} className="text-gray-800 dark:text-gray-200 dark:hover:bg-neutral-900 hover:bg-neutral-200 px-4 rounded-lg py-2" />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-black border-l border-neutral-200 dark:border-neutral-800 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={50}
                    height={30}
                    className="rounded-full mt-1"
                    priority
                    quality={100}
                  />
                  <span className="text-xl font-bold">Syntax</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col p-4 space-y-2 flex-1">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-800 dark:text-gray-200 hover:text-orange-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 px-4 py-3 rounded-lg transition-all font-medium"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <Button
                  variant="outline"
                  className="w-full rounded-full py-3"
                  onClick={closeMobileMenu}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-full py-3"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
