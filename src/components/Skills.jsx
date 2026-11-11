const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'] },
  { category: 'Backend & DB', items: ['Node.js', 'Express', 'REST API', 'MySQL'] },
  { category: 'Tools & Data Science', items: ['Git/GitHub', 'VS Code', 'Python', 'pandas', 'Cisco Packet Tracer'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
          Keahlian & <span className="text-indigo-400">Teknologi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-indigo-300">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 text-sm bg-slate-900 text-slate-300 rounded-md border border-slate-700">
                    {skill}
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