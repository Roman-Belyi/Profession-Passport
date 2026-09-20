export default function Skills() {
  const skills = {
    professional: ['HTML/CSS/JS', 'React', 'TypeScript', 'SQL', 'Python', 'Node.js'],
    personal: ['Логіка', 'Терпіння', 'Дисципліна', 'Любознательність'],
    digital: ['Git', 'Термінал', 'Робота з API', 'Відкладка/Тести', 'Frameworks'],
  }

  return (
    <section id="skills" className="py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          Необхідні <span className="bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">навички</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center gap-2">
              <i data-lucide="briefcase" className="w-6 h-6"></i>
              Професійні
            </h3>
            <ul className="space-y-2 text-gray-300">
              {skills.professional.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center gap-2">
              <i data-lucide="heart" className="w-6 h-6"></i>
              Особисті
            </h3>
            <ul className="space-y-2 text-gray-300">
              {skills.personal.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-teal-300 flex items-center gap-2">
              <i data-lucide="monitor" className="w-6 h-6"></i>
              Цифрові
            </h3>
            <ul className="space-y-2 text-gray-300">
              {skills.digital.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}