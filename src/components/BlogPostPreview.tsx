import Link from 'next/link'
import { BlogPost } from 'types'

const BlogPostPreview = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="block">
        <article className="mb-14">
          <h4 className="font-extrabold text-3xl leading-none mb-2 tracking-tight">
            {post.title}
          </h4>
          <p className="mb-1 text-dark-gray dark:text-gray-300">
            <time dateTime={post.date}>{formattedDate}</time> •{' '}
            {post.readingTime.text}
          </p>
          <p className="md:text-lg text-dark-gray dark:text-gray-300">
            {post.excerpt}
          </p>
        </article>
      </a>
    </Link>
  )
}

export default BlogPostPreview
