import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

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
    title: 'Cryvia',
    description:
      'Test your web3 knowledge and win crypto prices participating to live quiz contests',
    tags: [
      'Next.js',
      'Tailwind CSS',
      'Solidity',
      'Polygon',
      'Prisma',
      'PostgreSQL',
    ],
    url: 'https://beta.cryvia.xyz/',
    githubUrl: 'https://github.com/mattiapomelli/cryvia-contracts',
    logo: CryviaLogo,
  },
  {
    title: 'Codeshare',
    description:
      'A platform where developers can share their best code snippets and find solutions to coding problems',
    tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
    url: 'https://codeshare.tech/',
    githubUrl: 'https://github.com/mattiapomelli/codeshare',
    logo: CodeshareLogo,
  },
]
