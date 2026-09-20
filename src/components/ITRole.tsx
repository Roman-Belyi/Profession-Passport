export default function ITRole() {
  const tools = [
    { icon: 'code', name: 'React', desc: 'Фронтенд' },
    { icon: 'braces', name: 'TypeScript', desc: 'Типізація' },
    { icon: 'server', name: 'Node.js', desc: 'Бекенд' },
    { icon: 'database', name: 'SQL', desc: 'Бази даних' },
    { icon: 'git-branch', name: 'Git', desc: 'Контроль версій' },
    { icon: 'palette', name: 'Figma', desc: 'Дизайн' },
  ]

   {/*Tools-Block*/}
  return (
    <section id="it" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          ІТ у <span className="bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">професії</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(94,234,212,0.15)] transition-all duration-300">
              <i data-lucide={tool.icon} className="w-8 h-8 text-teal-300 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}