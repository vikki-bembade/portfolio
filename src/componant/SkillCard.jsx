import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100">
        <img src={skill.logo} alt={skill.name} className="h-10 w-10 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
      <p className="mt-2 text-sm text-slate-600">Level: {skill.level}</p>
    </div>
  )
}

export default SkillCard