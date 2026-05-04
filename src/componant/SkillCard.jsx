import React from 'react'
import Skills from '../pages/Skills'

const SkillCard = ({ skill }) => {
  console.log(skill)
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{skill.name}</h3>
      <p className="mt-2 text-slate-600">{skill.level}</p>
    </div>
  )
}

export default SkillCard