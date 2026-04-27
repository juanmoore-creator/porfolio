
import React from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MotionConfig>
  )
}

export default App
