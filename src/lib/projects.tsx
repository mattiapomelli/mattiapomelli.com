import CapazLogo from '@/icons/capaz.svg'
import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  githubUrl?: string
  logo: string | (({ className }: { className: string }) => JSX.Element)
}

export const projects: Project[] = [
  {
    title: 'Lenschool',
    description:
      'A social learning platform to make online education more fun, collaborative and effective.',
    tags: ['Next.js', 'Lens Protocol', 'KnowledgeLayer', 'Livepeer'],
    url: 'https://lenschool.vercel.app/',
    githubUrl: 'https://github.com/mattiapomelli/lenschool',
    logo: '/lenschool.png',
  },
  {
    title: 'Gumrua',
    description:
      'Web3 Gumroad, the easiest way to sell digital products and educational content with crypto.',
    tags: ['Next.js', 'Monerium', 'Solidity', 'Safe SDK', 'Supabase'],
    url: 'https://betterpc.vercel.app/',
    githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
    logo: '/gumrua.webp',
  },
  {
    title: 'BetteRPC',
    description:
      'An efficient, decentralized and configurable RPC gateway leveraging a peer-to-peer network.',
    tags: ['Express', 'Fluence Network'],
    url: 'https://betterpc.vercel.app/',
    githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
    logo: '/betterpc.png',
  },
  {
    title: 'Capaz',
    description:
      'A yield-bearing escrow system, and marketplace for tokenized escrow payments.',
    tags: ['Solidity', 'React', 'Ethereum'],
    url: 'https://capazpay.eth.limo/',
    githubUrl: 'https://github.com/TalentLayer-Labs/capaz',
    logo: '/capaz.png',
  },
  {
    title: 'Leets',
    description:
      'The place to find new music daily, share your discoveries of new hits and support talented emerging artists.',
    tags: ['MongoDB', 'Next.js', 'Tailwind', 'Typescript'],
    url: 'https://www.leets.it/',
    githubUrl: 'https://github.com/valdo99/leets-frontend',
    logo: '/leets.png',
  },
  {
    title: 'Cryvia',
    description:
      'Test your web3 knowledge and win crypto prizes participating to live quiz contests',
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
