import Link from 'next/link'

import ThemeToggler from '../ThemeToggler'
import Container from './Container'

const Navbar = () => {
  return (
    <header className="py-12">
      <Container className="flex justify-between items-center">
        <Link href="/">
          <a>
            <h1 className="font-black text-xl text-main-blue dark:text-main-light-blue">
              tiapome
            </h1>
          </a>
        </Link>
        <nav className="flex items-center">
          {/* <Link href="/">
          <a className="p-2 sm:p-4 font-semibold">projects</a>
        </Link>
        <Link href="/articles">
          <a className="p-2 sm:p-4 font-semibold">articles</a>
        </Link> */}
          <ThemeToggler />
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
