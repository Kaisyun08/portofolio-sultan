import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      'service_618emra',
      'template_h8q0eqx',
      formRef.current,
      'qs_5MVNbtoLST1v8U' 
    )
    .then(() => {
      setLoading(false)
      setStatusMsg('Pesan berhasil terkirim!')
      formRef.current.reset()
    }, (error) => {
      setLoading(false)
      setStatusMsg('Gagal mengirim pesan. Silakan coba lagi.')
      console.error(error)
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-xl mx-auto px-6 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Mari <span className="text-indigo-400">Bekerja Sama</span></h2>
          <p className="text-slate-400 text-sm mt-2">Kirim pesan langsung ke email saya melalui form di bawah ini.</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Nama Anda</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              placeholder="Masukkan nama"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Anda</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              placeholder="nama@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Pesan</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              placeholder="Tuliskan pesan Anda..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-indigo-600/20 disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
          {statusMsg && <p className="text-center text-sm text-indigo-400 mt-2">{statusMsg}</p>}
        </form>
      </div>
    </section>
  )
}