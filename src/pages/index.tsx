import { Post } from 'contentlayer/generated'

import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'
import BlogPostPreview from '../components/BlogPostPreview'
import ProjectCard from '../components/ProjectCard'

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
