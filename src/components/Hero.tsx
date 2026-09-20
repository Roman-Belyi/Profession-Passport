export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#0A0A0A] text-white flex items-center px-6 bg-grid pt-20  ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Start-Left */}
        
        <div>
          <div className="inline-block border border-teal-400/30 rounded-full px-4 py-2 text-teal-300 text-sm tracking-widest uppercase mb-6">
           SOFTWARE ENGINEER
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Створюю
            <span className="bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">
              {" "}цифрові рішення
            </span>
          </h1>

          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            Пишу код для веб-додатків. Фронтенд + бекенд. Створюю те, чим користуються люди.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#plan" className="bg-teal-300 text-black font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(94,234,212,0.5)] hover:shadow-[0_0_30px_rgba(94,234,212,0.7)] hover:bg-teal-200 transition-all duration-300">
              Мій план
            </a>
            <a href="#it" className="border border-teal-400/50 text-teal-300 font-bold px-8 py-4 rounded-lg hover:bg-teal-400/10 transition-all duration-300">
              IT у професії
            </a>
          </div>
        </div>

        {/* Code-Block */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-teal-400/20 bg-[#1A1A1A] p-8 shadow-[0_0_40px_rgba(94,234,212,0.1)]">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <p className="text-teal-300">const <span className="text-white">developer</span> = {"{"}</p>
              <p className="pl-4 text-gray-400">name: <span className="text-green-400">'Rwhite'</span>,</p>
              <p className="pl-4 text-gray-400">role: <span className="text-green-400">'Software Engineer'</span>,</p>
              <p className="pl-4 text-gray-400">stack [</p>
              <p className="pl-8 text-green-400">'React', 'TS', 'TailwindCSS', 'Vite'</p>
              <p className="pl-4 text-gray-400">],</p>
              <p className="pl-4 text-gray-400">focus: <span className="text-green-400">'Fullstack'</span></p>
              <p className="text-teal-300">{"}"}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}