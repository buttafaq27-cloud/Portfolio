"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 navbar-dark">
      <div className="container max-w-6xl">
        {/* Logo */}
        <a className="navbar-brand text-xl font-bold text-white tracking-tighter" href="#home">
          AFAQ<span className="text-blue-500">BUTT</span>
        </a>

        {/* Mobile Toggler Button (Ye missing tha) */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav items-center gap-md-4 pt-3 pt-md-0">
            <a href="#home" className="nav-link text-sm text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="nav-link text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="nav-link text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="nav-link text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            
            {/* Hire Me Button */}
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all mt-3 mt-md-0 d-inline-block"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;