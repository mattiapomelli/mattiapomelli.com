import { Post } from 'contentlayer/generated'

import { H1, H3, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'
import BlogPostPreview from '../components/BlogPost/BlogPostPreview'
import ProjectCard from '../components/ProjectCard'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  return (
    <>
      {/* Bio */}
      <div className="mt-6">
        <H1 className="mb-3">Hey, I&apos;m Mattia</H1>
        <Text>
          I&apos;m a full stack web developer. I&apos;m always focused on
          learning modern technologies, and striving to provide value to people
          through quality software.
        </Text>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H3 className="mb-3">Projects</H3>
        <Text className="mb-6">
          Some of the last projects I&apos;ve been working on
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-autofill gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="mt-12">
        <H3 className="mb-3">Articles</H3>
        <Text className="mb-6">
          Some articles that I&apos;ve written about coding and technology
        </Text>
        <div className="flex flex-col gap-8 mb-14">
          {latestPosts.map((post) => (
            <BlogPostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
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
