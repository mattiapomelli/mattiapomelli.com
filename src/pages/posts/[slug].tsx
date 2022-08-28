import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from 'contentlayer/generated'

import BlogSeo from '@/components/BlogSeo'
import MDXComponents from '@/components/MDXComponents'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'

const PostPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <BlogSeo post={post} />
      <article>
        <header className="mb-10">
          <h1 className="text-5xl font-black mb-3 mt-8 tracking-tight">
            {post.title}
          </h1>
          <p className="mb-1 text-dark-gray dark:text-gray-300">
            <time dateTime={post.date}>{formattedDate}</time> •{' '}
            {post.readingTime}
          </p>
        </header>
        <div className="prose dark:prose-dark max-w-none font-secondary">
          <MDXContent components={MDXComponents} />
        </div>
      </article>
    </>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getAllPostSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = getPostBySlug(params?.slug?.toString() || '')
  return {
    props: {
      post,
    },
  }
}
