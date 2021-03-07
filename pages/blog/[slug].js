import { useEffect } from 'react'
import hydrate from 'next-mdx-remote/hydrate'

import { getAllPostSlugs, getPostBySlug } from '../../lib/mdx'
import MDXComponents from '../../components/MDXComponents'
import BlogSeo from '../../components/BlogSeo'

const options = { month: 'short', day: 'numeric', year: 'numeric' }

export default function Post({ source, frontMatter }) {
  const content = hydrate(source, { components: MDXComponents })
  const formattedDate = new Date(frontMatter.date).toLocaleDateString(
    'en-IN',
    options
  )

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
      <BlogSeo {...frontMatter} />
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
          {content}
        </div>
      </article>
    </>
  )
}

export async function getStaticPaths() {
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

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  return { props: post }
}
