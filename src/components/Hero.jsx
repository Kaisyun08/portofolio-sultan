import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import FlipCard from '@/components/FlipCard' 
import gambar_sultan from '../assets/gambar_sultan.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Kolom Kiri: Teks & Profil */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-950/60 rounded-full border border-indigo-800">
            Full-Stack Web Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Halo, saya <span className="text-indigo-400">Sultan Nugroho</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Mahasiswa Teknik Informatika & Pengembang Web yang berfokus pada pembuatan aplikasi web modern, responsif, dan terstruktur dengan React, Node.js, serta Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-indigo-600/20"
            >
              Lihat Proyek
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/Kaisyun08" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sultan-nugroho-235282449/" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Card dari React Bits */}
        <div className="flex justify-center items-center">
          <FlipCard
            width={320}
            height={420}
            background="#1e293b" // Warna latar Slate 800

            // SISI DEPAN (FRONT)
            front={
              <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center">
                {/* Masukkan Gambar Foto Profil Anda di sini */}
                <img
                  src={gambar_sultan} // Ganti dengan URL/path foto Anda (misal: /profile.jpg)
                  alt="Sultan Nugroho"
                  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white">Sultan Nugroho</h3>
                <p className="text-indigo-400 font-medium text-sm mt-1">Full-Stack Web Developer</p>
                <span className="mt-4 text-xs bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                  Klik / Seret untuk balik 🔄
                </span>
              </div>
            }

            // SISI BELAKANG (BACK)
            back={
              <div className="w-full h-full p-6 flex flex-col justify-center text-center bg-indigo-950/90 text-white">
                <h4 className="text-lg font-bold text-indigo-300 mb-2">Tentang Saya</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Berpengalaman membangun aplikasi web interaktif dengan React, Express, dan MySQL.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-xs bg-indigo-900/80 text-indigo-200 px-2 py-1 rounded border border-indigo-700">React</span>
                  <span className="text-xs bg-indigo-900/80 text-indigo-200 px-2 py-1 rounded border border-indigo-700">Node.js</span>
                  <span className="text-xs bg-indigo-900/80 text-indigo-200 px-2 py-1 rounded border border-indigo-700">MySQL</span>
                  <span className="text-xs bg-indigo-900/80 text-indigo-200 px-2 py-1 rounded border border-indigo-700">Tailwind</span>
                </div>
              </div>
            }
          />
        </div>

      </div>
    </section>
  )
}

