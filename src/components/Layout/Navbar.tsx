import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <header className="flex justify-between items-center w-full max-w-3xl mx-auto px-8 md:px-10 py-12">
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
        <button
          className="text-main-black dark:text-white p-0.5 rounded-sm focus:outline-none focus:ring focus:border-main-blue"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted &&
            (theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="fill-current"
              >
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                className="fill-current"
              >
                <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z" />
              </svg>
            ))}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
