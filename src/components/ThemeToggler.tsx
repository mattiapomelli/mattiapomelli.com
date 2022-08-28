import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import MoonIcon from '@/icons/moon.svg'
import SunIcon from '@/icons/sun.svg'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="text-main-black dark:text-white p-0.5 rounded-sm focus:outline-none focus:ring focus:border-main-blue"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted &&
        (theme === 'dark' ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        ))}
    </button>
  )
}

export default ThemeToggler
