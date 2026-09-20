export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-300 to-green-400 flex items-center justify-center">
            <span className="text-black font-black text-lg">R</span>
          </div>
          <span className="text-white font-bold text-xl">Rwhite</span>
        </div>

        {/* NavBar */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-gray-400 hover:text-teal-300 transition">Головна</a>
          <a href="#it" className="text-gray-400 hover:text-teal-300 transition">ІТ</a>
          <a href="#skills" className="text-gray-400 hover:text-teal-300 transition">Навички</a>
          <a href="#plan" className="text-gray-400 hover:text-teal-300 transition">План</a>
          <a href="#sources" className="text-gray-400 hover:text-teal-300 transition">Джерела</a>
        </nav>

        {/* Button-Plan */}
        <a href="#plan" className="bg-teal-300 text-black font-bold px-5 py-2 rounded-lg hover:bg-teal-200 transition text-sm">
          Мій План
        </a>

      </div>
    </header>
  )
}