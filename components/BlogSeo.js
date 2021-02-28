import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ slug, title, excerpt, date }) => {
  const publishedTime = new Date(date).toISOString()
  const url = `https://mattiapomelli.com/blog/${slug}`

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
      />
    </>
  )
}

export default BlogSeo
