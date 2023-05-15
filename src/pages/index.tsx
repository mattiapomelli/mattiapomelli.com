import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPost/BlogPostPreview'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  return (
    <>
      {/* Bio */}
      <div className="mt-6">
        <H1 className="mb-3">Hey, I&apos;m Mattia</H1>
        <Text>
          I&apos;m a builder nomading around hackathons and creating cool
          projects in web3. I&apos;m currently working on{' '}
          <a
            href="https://knowledgelayer.org/"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            KnowledgeLayer
          </a>
          , an open protocol and developer toolkit for building educational
          platforms. I&apos;m excited about learning innovative technologies and
          using them to build products that bring value to people.
        </Text>
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H3 className="mb-3">Projects</H3>
        <Text className="mb-6">
          Some of the last projects I&apos;ve been working on.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="mt-12">
        <H3 className="mb-3">Posts</H3>
        <Text className="mb-6">
          Some posts that I&apos;ve written about coding and web development.
        </Text>
        <div className="flex flex-col gap-8">
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
