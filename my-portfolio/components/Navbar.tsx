"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-tighter">
          AFAQ<span className="text-blue-500">BUTT</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          
          {/* Hire Me Button */}
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;