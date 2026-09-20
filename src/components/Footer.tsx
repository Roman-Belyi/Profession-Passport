export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-teal-300 to-green-400 flex items-center justify-center">
            <span className="text-black font-black text-xs">R</span>
          </div>
          <span className="text-gray-500 text-sm">Rwhite</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 - Мій паспорт професії</p>
      </div>
    </footer>
  )
}