export default function Sources() {
  const sources = [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
    { name: 'TypeScript Docs', url: 'https://www.typescriptlang.org' },
    { name: 'React Docs', url: 'https://react.dev' },
    { name: 'Github', url: 'https://github.com/Roman-Belyi' }
  ]

  return (
    <section id="sources" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-8 flex items-center gap-3">
          <i data-lucide="book-open" className="w-10 h-10 text-teal-300"></i>
          Джерела
        </h2>
        <ul className="space-y-4">
          {sources.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-200 text-xl flex items-center gap-2 transition">
                <i data-lucide="external-link" className="w-5 h-5"></i>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}