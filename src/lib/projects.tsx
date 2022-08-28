import CodeshareLogo from '@/icons/codeshare.svg'
import CountripLogo from '@/icons/countrip.svg'

export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  githubUrl?: string
  logo: ({ className }: { className: string }) => JSX.Element
}

export const projects: Project[] = [
  {
    title: 'Codeshare',
    description:
      'A platform where developers can share their best code snippets and find solutions to coding problems',
    tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
    url: 'https://codeshare.tech/',
    githubUrl: 'https://github.com/mattiapomelli/codeshare',
    logo: CodeshareLogo,
  },
  {
    title: 'Countrip',
    description:
      'An interactive map showing information and statistics about world countries',
    tags: ['React', 'REST Countries API', 'Leaflet Maps'],
    url: 'https://countrip.netlify.app/',
    githubUrl: 'https://github.com/mattiapomelli/countrip',
    logo: CountripLogo,
  },
]
