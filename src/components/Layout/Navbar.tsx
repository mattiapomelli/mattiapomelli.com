import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

import ThemeToggler from '@/components/ThemeToggler'
import Container from './Container'

const Navbar = () => {
  const router = useRouter()

  return (
    <header className="py-12">
      <Container className="flex justify-between items-center">
        <nav className="flex items-center gap-8">
          <Link href="/">
            <a
              className={cx(
                'font-medium',
                router.pathname === '/' ? 'underline' : 'text-text-secondary',
              )}
            >
              home
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={cx(
                'font-medium',
                router.pathname === '/projects'
                  ? 'underline'
                  : 'text-text-secondary',
              )}
            >
              projects
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={cx(
                'font-medium',
                router.pathname === '/blog'
                  ? 'underline'
                  : 'text-text-secondary',
              )}
            >
              blog
            </a>
          </Link>
          <a
            href="https://mattiapomelli.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              'font-medium',
              router.pathname === '/posts'
                ? 'underline'
                : 'text-text-secondary',
            )}
          >
            newsletter
          </a>
        </nav>
        <ThemeToggler />
      </Container>
    </header>
  )
}

export default Navbar
