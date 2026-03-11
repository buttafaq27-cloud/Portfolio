import React from 'react'

const Projects = () => {
  const myProjects = [
    {
      title: "ZA Jewels",
      description: "A luxury jewelry website with animated borders and custom navigation.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Coffee Shop",
      description: "Responsive coffee menu with a functional bill calculation system.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white/2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-blue-500">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div key={index} className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:bg-blue-600/5 hover:border-blue-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects