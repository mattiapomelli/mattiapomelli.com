import React from 'react'
import { NextSeo } from 'next-seo'

import ProjectCard from '@/components/ProjectCard'
import { H3, Text } from '@/components/Text'
import { projects } from '@/lib/projects'

const url = 'https://mattiapomelli.com/projects'
const title = 'Projects – Mattia Pomelli'
const description = 'Projects I have worked on.'

const ProjectsPage = () => {
  const personalProjects = projects.filter((project) => !project.hackathon)
  const hackathonProjects = projects.filter((project) => project.hackathon)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <H3 className="mt-6 mb-3">Personal projects</H3>
      <Text className="mb-5">
        Some of the personal projects that I&apos;m working on or have built in
        the past.
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <H3 className="mt-20 mb-3">Hackathon projects</H3>
      <Text className="mb-5">
        Some stuff that I built during Web3 hackathon
      </Text>

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
        {hackathonProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  )
}

export default ProjectsPage
