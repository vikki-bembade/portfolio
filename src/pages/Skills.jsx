import React from 'react'
import skills from '../data/skills'
import SkillCard from '../componant/SkillCard'

const Skills = () => {

  console.log()
  return (
    <section id="skills" className="mx-auto my-6 max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <h2 className="text-3xl font-semibold text-slate-900">Skills</h2>
      <h4 className="mt-2 text-slate-600">Skill Cards</h4>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => 
          <SkillCard key={skill.name} skill={skill} />
        )}
      </div>
    </section>
  )
}

export default Skills