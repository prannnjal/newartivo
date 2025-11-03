"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const isContactUs = pathname === '/contact-us';

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 ${isContactUs ? '' : 'bg-transparent'}`}
      style={isContactUs ? { background: 'linear-gradient(90deg, rgba(11, 25, 47, 1), rgba(205, 64, 11, 1))' } : undefined}
    >
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

        {/* Right Side - Navigation Links and Button */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Journal
          </a>
          <a href="/why-artivo" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Why Artivo
          </a>
          <a href="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="/contact-us" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Contact Us
          </a>
          
          {/* Connect Button */}
          <button 
            className="text-black px-8 py-3 font-semibold text-sm rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};
