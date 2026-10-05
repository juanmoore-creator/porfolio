import React from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </MotionConfig>
  )
}

export default App
