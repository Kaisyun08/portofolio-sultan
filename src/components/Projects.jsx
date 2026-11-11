import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Hotel Grand Nusantara',
    description: 'Aplikasi web reservasi kamar hotel full-stack dengan sistem pemesanan interaktif dan pengelolaan kamar.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Java Script'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Movie Database REST API',
    description: 'Layanan RESTful API CRUD untuk mengelola katalog data film, genre, dan rating.',
    tech: ['Node.js', 'Express', 'MySQL', 'REST API', 'Java Script'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Student Registration Predictor',
    description: 'Model analisis data dan prediksi pendaftaran mahasiswa baru menggunakan Linear Regression.',
    tech: ['Python', 'pandas', 'scikit-learn', 'Google Colab'],
    demo: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
          Proyek <span className="text-indigo-400">Unggulan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between p-6 bg-slate-800/40 border border-slate-700/60 rounded-xl hover:border-indigo-500/50 transition-all">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs px-2 py-0.5 bg-indigo-950/80 text-indigo-300 rounded border border-indigo-800/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2 border-t border-slate-800 text-sm">
                  <a href={item.repo} className="flex items-center gap-1 text-slate-300 hover:text-indigo-400">
                    <Code2 size={16} /> Code
                  </a>
                  <a href={item.demo} className="flex items-center gap-1 text-slate-300 hover:text-indigo-400">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}