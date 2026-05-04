import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h4 className="text-xl font-semibold text-slate-900">{project.name}</h4>
      <p className="mt-3 text-slate-600">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700">
        {project.technologies.map((tech, index) => (
          <li key={index} className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard