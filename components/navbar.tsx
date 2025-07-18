'use client';
import React from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Themetoggle } from './ui/themetoggle';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={cn(
        "w-full transition-all sticky top-0 z-50 duration-300",
        isScrolled
          ? "border-b border-neutral-200/50 bg-neutral-200/40 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      <div className="container flex items-center justify-between mx-auto px-4 py-3">
        <div className="flex items-center space-x-4">
          <div className="text-2xl ml-8 font-bold">Syntax</div>
        </div>
        <div className="hidden text-gray-800 md:flex text-sm justify-center items-center font-semibold space-x-6 flex-1">
          <a href="#home" className="">Home</a>
          <a href="#about" className="">About</a>
          <a href="#services" className="">Services</a>
          <a href="#contact" className="">Contact</a>
        </div>
        <div className='flex items-center mr-6 ml-auto'>
          <div>
            <Themetoggle />
          </div>
          <div className='ml-4 flex space-x-4 '>
            <button className='hover:bg-neutral-900 rounded-4xl py-2 px-2 '>
              Login
            </button>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-600'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
