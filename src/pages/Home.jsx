import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'

const Home = () => {
  return (
    <section id='home' className="mx-auto my-6 max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Vikki Bemabde</h1>
      <h3 className="mt-3 text-lg text-slate-600">FullStack developer</h3>
      <button onClick={handleShowResume} className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
        Show Resume
      </button>
      <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
        <a href={Viki_Bembade} download className="inline-block rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
          Download Resume
        </a>
        <a href='https://www.linkedin.com/in/vikki-bembade/' target='_blank' className="inline-block rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
          LinkedIn
        </a>
        <a href='https://github.com/vikki-bembade' target='_blank' className="inline-block rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900">
          GitHub
        </a>
      </div>
    </section>
  )
}
function handleShowResume(){
    window.open(Viki_Bembade, '_blank');
}

export default Home