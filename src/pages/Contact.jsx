import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mx-auto my-6 max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <h2 className="text-3xl font-semibold text-slate-900">Contact Details</h2>
      <p className="mt-4 text-slate-600">Email : BemabdeVikki@gmail.com</p>
      <p className="mt-2 text-slate-600">Phone : +91 9022200820</p>
      <p className="mt-2 text-slate-600">
        LinkedIn : <a href="https://www.linkedin.com/in/vikki-bembade/" className="text-slate-900 underline transition hover:text-slate-700">LinkedIn</a>
      </p>
      <p className="mt-2 text-slate-600">
        Instagram : <a href="https://www.instagram.com/vikki_bembade/" className="text-slate-900 underline transition hover:text-slate-700">Instagram</a>
      </p>
    </section>
  )
}

export default Contact