import React from 'react'
import ProjectCard from '../componant/ProjectCard'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="mx-auto my-6 max-w-5xl rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
      <h2 className="text-3xl font-semibold text-slate-900">Projects</h2>
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects