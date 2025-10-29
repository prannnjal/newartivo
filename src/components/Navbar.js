"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isWhyArtivoPage = pathname === '/why-artivo';
  
  return (
    <nav className={`${isWhyArtivoPage ? 'relative' : 'fixed top-0 left-0 right-0'} z-50 bg-transparent`}>
      <div className="px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <Image
              src="/Logo/Frame 33.png"
              alt="ARTIVO Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Journal
          </a>
          <a href="/why-artivo" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Why Artivo
          </a>
          <a href="#" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="/contact-us" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Contact Us
          </a>
        </div>

        {/* Connect Button */}
        <button className="bg-yellow-400 text-black px-8 py-3 font-semibold text-sm tracking-wide hover:bg-yellow-300 transition-colors rounded-sm">
          Connect
        </button>
      </div>
    </nav>
  );
};
