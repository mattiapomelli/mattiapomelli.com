import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPost/BlogPostPreview'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { getLatestPosts } from '@/lib/posts'
import { projects } from '@/lib/projects'

const HomePage = ({ latestPosts }: { latestPosts: Post[] }) => {
  const filteredProjects = projects.filter((project) => project.showOnHomepage)

  return (
    <>
      {/* Bio */}
      <div className="mt-6">
        <H1 className="mb-6">Hey, I&apos;m Mattia!</H1>
        <Text>
          I&apos;m currently working on{' '}
          <a
            href="https://reweb.so"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Reweb
          </a>
          , a visual website builder for developers and designers. I like to
          build tools for creatives. I hope that what I build can empower people
          to express their creativity and make their ideas come to life.
        </Text>
        <br />
        <Text>
          I&apos;m nomad 🌍. I haven&apos;t had a fixed home for the past 2
          years. I love travelling and living crazy adventures.
        </Text>
        <br />
        {/* <Text>
          I haven&apos;t had a fixed home for the past few months, but you can
          find me at most web3 hackathons around Europe.
        </Text> */}
      </div>

      {/* Projects */}
      <div className="mt-12">
        <H3 className="mb-3">Projects</H3>
        <Text className="mb-6">
          These are some of the last projects that I&apos;ve been working on.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/projects">
            <a className="text-primary text-center bg-base-200 rounded-lg px-4 py-2">
              See all projects
            </a>
          </Link>
        </div>
      </div>

      {/* Posts */}
      <div className="mt-12">
        <H3 className="mb-3">Last Posts</H3>
        <Text className="mb-6">
          Some posts that I&apos;ve written about web development and my builder
          journey.
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
