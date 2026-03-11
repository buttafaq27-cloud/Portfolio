"use client";

import React from 'react'

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-500 uppercase bg-blue-500/5 rounded-full border border-blue-500/20">
          Get In Touch
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
          Ready to start your <br />
          <span className="text-gray-500 italic font-medium tracking-tight">next big project?</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-center mt-10">
          <a href="mailto:buttafaq27@gmail.com" className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
            Email Me <span>→</span>
          </a>
          <a href="https://wa.me/923209438277" target="_blank" className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3">
            <span className="text-green-500">●</span> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact