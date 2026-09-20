export default function Plan() {
  const steps = [
    { year: '2025', title: 'Фронтенд Base', desc: 'HTML, CSS, JS, TailwindCSS, Git' },
    { year: '2026', title: 'Фронтенд Advanced', desc: 'React, TypeScript, Zustand, TanstackQuery, Next.js' },
    { year: '2027', title: 'Бекенд Base', desc: 'Node.js, Express.js, SQL' },
    { year: '2028', title: 'Бекенд Advanced', desc: 'Python/Go, C# ' },
    { year: '2030+', title: 'Робототехніка + ШІ', desc: 'C/C++, Rust, Arduino' },
  ]

  return (
    <section id="plan" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12">
          Мій <span className="bg-gradient-to-r from-teal-300 to-green-400 bg-clip-text text-transparent">план дій</span>
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.year} className="flex gap-6 items-start">
              <div className="text-teal-300 font-bold text-xl min-w-[80px]">
                {step.year}
              </div>
              <div className="border-l-2 border-teal-400 pl-6 pb-6">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}