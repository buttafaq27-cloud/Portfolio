import React from 'react'

const Skills = () => {
  const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Git"];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:border-blue-500 transition-all cursor-default group">
              <p className="text-gray-400 group-hover:text-white font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills