import Link from 'next/link'

const options = { month: 'short', day: 'numeric', year: 'numeric' }

export default function BlogPostPreview({
  title,
  slug,
  date,
  excerpt,
  readingTime,
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-IN', options)

  return (
    <Link href={`/blog/${slug}`}>
      <a className="block">
        <article className="mb-14">
          <h4 className="font-extrabold text-3xl leading-none mb-2 tracking-tight">
            {title}
          </h4>
          <p className="mb-1 text-dark-gray dark:text-gray-300">
            <time dateTime={date}>{formattedDate}</time> • {readingTime.text}
          </p>
          <p className="md:text-lg text-dark-gray dark:text-gray-300">
            {excerpt}
          </p>
        </article>
      </a>
    </Link>
  )
}
