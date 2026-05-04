import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './App.css'
import Contact from './pages/Contact'
import Footer from './componant/Footer'
import NavBar from './componant/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App