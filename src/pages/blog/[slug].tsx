import { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { BlogPostFrontmatter, ReadingTime } from 'types'

import BlogSeo from '../../components/BlogSeo'
import MDXComponents from '../../components/MDXComponents'
import { getAllPostSlugs, getPostBySlug } from '../../lib/mdx'

interface PostPageProps {
  source: any
  frontMatter: BlogPostFrontmatter & {
    slug: string
    readingTime: ReadingTime
  }
}

const PostPage = ({ source, frontMatter }: PostPageProps) => {
  const formattedDate = new Date(frontMatter.date).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${frontMatter.slug}`, {
        method: 'PUT',
      })

    // register post view only if is production
    if (window.location.hostname === 'tiapome.com') {
      registerView()
    }
  }, [frontMatter.slug])

  return (
    <>
      <BlogSeo post={frontMatter} />
      <article>
        <header className="mb-10">
          <h1 className="text-5xl font-black mb-3 mt-8 tracking-tight">
            {frontMatter.title}
          </h1>
          <p className="mb-1 text-dark-gray dark:text-gray-300">
            <time dateTime={frontMatter.date}>{formattedDate}</time> •{' '}
            {frontMatter.readingTime.text}
          </p>
        </header>
        <div className="prose dark:prose-dark max-w-none font-secondary">
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </article>
    </>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug)

  return { props: post }
}
