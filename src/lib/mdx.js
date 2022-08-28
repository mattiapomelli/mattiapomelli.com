import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'

import MDXComponents from '../components/MDXComponents'

// Finding directory named "posts" from the current working directory of Node.
const postsDirectory = path.join(process.cwd(), 'data', 'blog')

// Get frontmatter of all posts sorted by date
export const getSortedPosts = () => {
  // Reads all the files in the post directory
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((filename) => {
    // Extracts contents of the MDX file
    const source = fs.readFileSync(path.join(postsDirectory, filename), 'utf8')
    const { data, content } = matter(source)

    return {
      slug: filename.replace('.mdx', ''),
      readingTime: readingTime(content),
      ...data,
    }
  })

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

// Get Slugs
export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((filename) => filename.replace('.mdx', ''))
}

// Get Post based on Slug
export const getPostBySlug = async (slug) => {
  const source = fs.readFileSync(
    path.join(postsDirectory, `${slug}.mdx`),
    'utf8'
  )

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    scope: data,
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    source: mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug,
      ...data,
    },
  }
}
