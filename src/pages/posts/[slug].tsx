import { GetStaticPaths, GetStaticProps } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Post } from 'contentlayer/generated'

import BlogSeo from '@/components/BlogPost/BlogPostSeo'
import MDXComponents from '@/components/MDXComponents'
import { H1 } from '@/components/Text'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/utils/dates'

const BlogPostPage = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <>
      <BlogSeo post={post} />
      <article>
        <header className="mt-6 mb-10">
          <H1 className="mb-3">{post.title}</H1>
          <p className="mb-1 text-text-secondary">
            <time dateTime={post.date}>{formatDate(post.date)}</time> •{' '}
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

export default BlogPostPage

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
