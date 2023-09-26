import { allPosts } from 'contentlayer/generated'

export const getAllPosts = () => {
  return allPosts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export const getPostBySlug = (slug: string) => {
  return allPosts.find((post) => post.slug === slug)
}

export const getAllPostSlugs = () => {
  return allPosts.map((post) => post.slug)
}

export const getLatestPosts = () => {
  return getAllPosts().slice(0, 2)
}
