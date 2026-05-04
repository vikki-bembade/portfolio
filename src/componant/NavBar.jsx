import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import App from '../App'


const NavBar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 py-4">
      <div className="flex flex-wrap justify-center gap-4 px-4 text-sm font-medium text-slate-700">
        <a href="#home" className="transition hover:text-slate-900">Home</a>
        <a href="#about" className="transition hover:text-slate-900">About</a>
        <a href="#skills" className="transition hover:text-slate-900">Skills</a>
        <a href="#projects" className="transition hover:text-slate-900">Projects</a>
        <a href="#contact" className="transition hover:text-slate-900">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar