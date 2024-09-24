import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  githubUrl?: string
  logo: string | (({ className }: { className: string }) => JSX.Element)
  showOnHomepage?: boolean
  hackathon?: boolean
}

export const projects: Project[] = [
  {
    title: 'Reweb',
    description: 'A visual website builder for Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Shadcn/UI'],
    url: 'https://reweb.so/',
    logo: '/reweb.png',
    // showOnHomepage: true,
  },
  {
    title: 'Supadash',
    description:
      'Get an AI-generated dashboard to visualize your database data in seconds.',
    tags: [],
    url: 'https://www.supadash.co/',
    logo: '/supadash.png',
    showOnHomepage: true,
  },
  {
    title: 'Buildshare',
    description:
      'Your assistant for building in public: automatically post on socials when you ship new features.',
    tags: [],
    url: 'https://buildshare.io/',
    logo: '/buildshare.png',
    showOnHomepage: true,
  },
  {
    title: 'KnowledgeLayer',
    description:
      'An open protocol and developer toolkit for building Web3 digital product marketplaces.',
    tags: [],
    url: 'https://www.knowledgelayer.org/',
    githubUrl: 'https://github.com/knowledgelayer',
    logo: '/knowledgelayer.png',
    showOnHomepage: false,
  },
  {
    title: 'DAOChat',
    description:
      'A platform to manage and participate in DAO governance through a wallet-to-wallet group chat.',
    tags: [],
    url: 'https://daochat-app.vercel.app/',
    githubUrl: 'https://github.com/mattiapomelli/dao-chat',
    logo: '/daochat.webp',
    hackathon: true,
  },
  {
    title: 'ZikiLeaks',
    description:
      'A privacy-focused, peer-to-peer WikiLeaks, where whistleblowers can publish leaks and receive donations anonymously.',
    tags: ['Next.js', 'Lens Protocol', 'Railgun', 'Sismo'],
    url: 'https://zikileaks.vercel.app/',
    githubUrl: 'https://github.com/mattiapomelli/zikileaks',
    logo: '/zikileaks.png',
    hackathon: true,
  },
  {
    title: 'BeeTogether',
    description:
      'An all-in-one platform to launch and manage your own service DAO or freelance collective in web3',
    tags: [],
    url: 'https://prompthunt.vercel.app/',
    githubUrl: 'https://github.com/prompt-hunt',
    logo: '/beetogether.png',
    hackathon: true,
  },
  {
    title: 'PromptHunt',
    description: 'An open and collaborative repository of AI prompts',
    tags: [],
    url: 'https://prompthunt.vercel.app/',
    githubUrl: 'https://github.com/prompt-hunt',
    logo: '/prompthunt.png',
    hackathon: true,
  },
  {
    title: 'Lenschool',
    description:
      'A social learning platform to make online education more fun, collaborative and effective.',
    tags: ['Next.js', 'Lens Protocol', 'KnowledgeLayer', 'Livepeer'],
    url: 'https://lenschool.vercel.app/',
    githubUrl: 'https://github.com/mattiapomelli/lenschool',
    logo: '/lenschool.png',
    hackathon: true,
  },
  {
    title: 'Gumrua',
    description:
      'Web3 Gumroad, the easiest way to sell digital products and educational content with crypto.',
    tags: ['Next.js', 'Monerium', 'Solidity', 'Safe SDK', 'Supabase'],
    url: 'https://betterpc.vercel.app/',
    githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
    logo: '/gumrua.webp',
    hackathon: true,
  },
  {
    title: 'BetteRPC',
    description:
      'An efficient, decentralized and configurable RPC gateway leveraging a peer-to-peer network.',
    tags: ['Express', 'Fluence Network'],
    url: 'https://betterpc.vercel.app/',
    githubUrl: 'https://github.com/TalentLayer-Labs/betterpc',
    logo: '/betterpc.png',
    hackathon: true,
  },
  {
    title: 'Capaz',
    description:
      'A yield-bearing escrow system, and marketplace for tokenized escrow payments.',
    tags: ['Solidity', 'React', 'Ethereum'],
    url: 'https://capazpay.eth.limo/',
    githubUrl: 'https://github.com/TalentLayer-Labs/capaz',
    logo: '/capaz.png',
    hackathon: true,
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
      'Test your web3 knowledge and win crypto prizes participating to live quiz contests.',
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
      'A platform where developers can share their best code snippets and find solutions to coding problems.',
    tags: ['Next.js', 'Styled-components', 'GraphQL', 'PostgreSQL', 'Hasura'],
    url: 'https://codeshare.tech/',
    githubUrl: 'https://github.com/mattiapomelli/codeshare',
    logo: CodeshareLogo,
  },
]
