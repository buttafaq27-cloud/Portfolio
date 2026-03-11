"use client"; 

import React, { useState } from 'react'
import Image from 'next/image'

const AfaqPhotoBook = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center py-10">
      <div 
        className="w-70 h-95 relative group cursor-pointer transition-transform duration-500 hover:scale-105"
        style={{ perspective: '1500px' }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div 
          className={`w-full h-full relative origin-left transition-transform duration-700 ease-in-out z-10`}
          style={{ 
            transformStyle: 'preserve-3d', 
            transform: isOpen ? 'rotateY(-160deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Cover */}
          <div className="absolute inset-0 z-20 w-full h-full rounded-2xl overflow-hidden backface-hidden border-2 border-white/10 shadow-2xl bg-[#1a1a1a]">
            
            {/* ✅ Exact match with your file: afaq.png */}
            <Image 
              src="/afaq.png" 
              alt="Afaq Butt"
              fill={true}
              className="object-cover group-hover:opacity-95 transition-opacity"
              priority={true}
            />
            
            <div className="absolute bottom-6 left-6 text-white text-xl font-bold tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] z-30">
                Afaq <span className="text-blue-500">.</span>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-20"></div>
          </div>

          {/* Inside Cover */}
          <div className="absolute inset-0 z-10 w-full h-full bg-[#1a1a1a] rounded-2xl backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
            <div className="w-2 h-full bg-black/20 absolute right-0"></div>
          </div>
        </div>

        {/* Back Content Page */}
        <div className="absolute inset-0 z-0 w-full h-full bg-[#111] rounded-2xl border-l-4 border-white/10 border shadow-lg p-8 flex flex-col justify-between overflow-hidden">
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase bg-blue-500/5 rounded-full border border-blue-500/20">
              Full Stack Journey
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Meet <span className="text-blue-500">Afaq</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              I am a passionate <span className="text-white font-medium">Full Stack Developer student</span> based in Lahore. 
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              I specialize in crafting modern web applications using the <span className="text-white font-medium">MERN stack</span>.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 text-[10px] text-gray-600 tracking-widest uppercase">
            © 2026 | Lahore, PK
          </div>
        </div>
      </div>
    </div>
  )
}

export default AfaqPhotoBook