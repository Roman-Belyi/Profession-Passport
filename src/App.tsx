


import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ITRole from './components/ITRole'
import Skills from './components/Skills'
import Plan from './components/Plan'
import Inspiration from './components/Inspiration'
import Sources from './components/Sources'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'

export default function App() {
  useEffect(() => {
    //@ts-ignore
    if (window.lucide) window.lucide.createIcons()
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Hero />
      <ITRole />
      <Skills />
      <Plan />
      <Inspiration />
      <Portfolio />
      <Sources />
      <Footer />
    </div>
  )
}