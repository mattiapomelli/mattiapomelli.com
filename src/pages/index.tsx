import { Post } from 'contentlayer/generated'

import { getLatestPosts } from '@/lib/posts'
import { Project } from '@/types'
import BlogPostPreview from '../components/BlogPostPreview'
import ProjectCard from '../components/ProjectCard'

const projects: Project[] = [
  {
    title: 'Codeshare',
    description:
      'A platform where developers can share their best code snippets and find solutions to coding problems',
    tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
    link: 'https://codeshare.tech/',
    githubLink: 'https://github.com/mattiapomelli/codeshare',
  },
  {
    title: 'Countrip',
    description:
      'An interactive map showing information and statistics about world countries',
    tags: ['React', 'REST Countries API', 'Leaflet Maps'],
    link: 'https://countrip.netlify.app/',
    githubLink: 'https://github.com/mattiapomelli/countrip',
  },
]

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  return (
    <>
      <h1 className="text-4.5xl md:text-6xl font-extrabold mb-4 mt-8 tracking-tight">
        Hey, I&apos;m Mattia
      </h1>
      <p className="md:text-lg mb-16 ml-0.5 text-dark-gray dark:text-gray-300">
        I&apos;m a full stack web developer. I&apos;m always focused on learning
        modern technologies, and striving to provide value to people through
        quality software.
      </p>

      <h3 className="text-4.5xl md:text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Projects
      </h3>
      <p className="md:text-lg ml-0.5 text-dark-gray dark:text-gray-300">
        Some of the last projects I&apos;ve been working on
      </p>
      <div className="grid grid-cols-1 md:grid-cols-autofill gap-4 mt-6 mb-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="text-4.5xl md:text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Articles
      </h3>
      <p className="md:text-lg ml-0.5 mb-8 text-dark-gray dark:text-gray-300">
        Some articles that I&apos;ve written about coding and technology
      </p>
      {latestPosts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const latestPosts = getLatestPosts()
  return {
    props: {
      latestPosts,
    },
  }
}
