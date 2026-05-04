import React from 'react'
import Contact from '../pages/Contact'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-4">
      <div className="text-center text-sm text-slate-600">
        &copy; {new Date().getFullYear()} Vikib. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer