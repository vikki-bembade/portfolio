import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Vikki Bembade. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer