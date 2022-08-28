import { ArticleJsonLd, NextSeo } from 'next-seo'
import { Post } from 'contentlayer/generated'

const BlogPostSeo = ({ post }: { post: Post }) => {
  const { slug, title, excerpt, date } = post
  const publishedTime = new Date(date).toISOString()
  const url = `https://tiapome.com/blog/${slug}`

  return (
    <>
      <NextSeo
        title={`${title} – Mattia Pomelli`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime,
          },
          url,
          title,
          description: excerpt,
        }}
      />
      <ArticleJsonLd
        authorName="Mattia Pomelli"
        dateModified={date}
        datePublished={date}
        description={excerpt}
        publisherName="Mattia Pomelli"
        title={title}
        url={url}
        images={[]}
        publisherLogo=""
      />
    </>
  )
}

export default BlogPostSeo
