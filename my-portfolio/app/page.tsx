import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AfaqPhotoBook from "../components/AfaqPhotoBook";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* 1. HERO SECTION (ID: home) */}
      <section id="home" className="mt-20 px-4 mb-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left">
            
            {/* Left Side: Text Content */}
            <div className="flex-1 flex flex-col items-center md:items-start mt-10 md:mt-0">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
                  Open for Collaboration
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter">
                  Crafting Digital <span className="text-blue-500">Experiences</span>
                </h1>
                
                <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed italic">
                  Hi, I'm <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4">Afaq Butt</span>. 
                  A Full Stack Developer from Lahore, building modern and responsive web applications.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-10">
                  {/* Buttons linked to IDs */}
                  <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20">
                    Check My Work
                  </a>
                  <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all">
                    Let's Connect
                  </a>
                </div>
            </div>

            {/* Right Side: Photo Book */}
            <div className="flex-1">
                <AfaqPhotoBook />
            </div>
            
        </div>
      </section>

      {/* 2. ABOUT/SKILLS SECTION (ID: about) */}
      <div id="about" className="border-t border-white/5 bg-white/1 scroll-mt-20">
        <Skills />
      </div>

      {/* 3. PROJECTS SECTION (ID: projects) */}
      <div id="projects" className="border-t border-white/5 scroll-mt-20">
        <Projects />
      </div>

      {/* 4. CONTACT SECTION (ID: contact) */}
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      {/* Background Shashka (Grid Effect) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      
      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
        © 2026 Afaq Butt. Built with ❤️ and Next.js
      </footer>
    </main>
  );
}