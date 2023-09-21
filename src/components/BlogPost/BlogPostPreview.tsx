import Link from 'next/link'
import { Post } from 'contentlayer/generated'

import { formatDate } from '@/utils/dates'
import { H4, Text } from '../Text'

const BlogPostPreview = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <article>
          <H4 className="mb-1.5">{post.title}</H4>
          <p className="mb-1 text-text-secondary">
            <time dateTime={post.date}>{formatDate(post.date)}</time> •{' '}
            {post.readingTime}
          </p>
          <Text>{post.excerpt}</Text>
        </article>
      </a>
    </Link>
  )
}

export default BlogPostPreview
