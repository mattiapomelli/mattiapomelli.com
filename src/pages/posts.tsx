import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Post } from 'contentlayer/generated'

import BlogPostPreview from '@/components/BlogPostPreview'
import { getAllPosts } from '@/lib/posts'

const url = 'https://tiapome.com/blog'
const title = 'Articles – Mattia Pomelli'
const description = 'Articles about coding and technology.'

const BlogPage = ({ posts }: { posts: Post[] }) => {
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  )

  console.log(posts)

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <h1 className="text-5xl font-extrabold mb-3 mt-8 tracking-tight">
        Articles
      </h1>
      <p className="text-lg mb-5 text-dark-gray dark:text-gray-300">
        Some articles I&apos;ve written about coding and tech
      </p>
      <div className="relative  w-full max-w-xs mb-12">
        <input
          spellCheck="false"
          className="bg-gray-100 dark:bg-dark-blue-600 py-2 pr-3 rounded-2xl w-full pl-9 outline-none
					placeholder-dark-gray dark:placeholder-gray-300 text-main-black dark:text-white"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2 left-2 fill-current text-light-gray"
        >
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
        </svg>
      </div>

      {filteredPosts.map((post) => (
        <BlogPostPreview key={post._id} post={post} />
      ))}
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()
  return { props: { posts: posts } }
}
