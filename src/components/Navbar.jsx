import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={20}
          className="text-xl font-bold text-indigo-400 cursor-pointer"
        >
          Sultan<span className="text-white">.dev</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={20}
            className="hover:text-indigo-400 cursor-pointer transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={20}
            className="hover:text-indigo-400 cursor-pointer transition-colors"
          >
            Keahlian
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={20}
            className="hover:text-indigo-400 cursor-pointer transition-colors"
          >
            Proyek
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={20}
            className="hover:text-indigo-400 cursor-pointer transition-colors"
          >
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  )
}