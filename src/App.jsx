import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Sultan Nugroho. All rights reserved.
      </footer>
    </div>
  )
}