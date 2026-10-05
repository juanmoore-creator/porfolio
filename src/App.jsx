
import React from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </MotionConfig>
  )
}

export default App
