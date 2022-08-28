export interface ReadingTime {
  text: string
  minutes: number
  time: number
  words: number
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  excerpt: string
  readingTime: ReadingTime
}

export interface BlogPostFrontmatter {
  title: string
  date: string
  author: string
  excerpt: string
  slug: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  githubLink: string
}
