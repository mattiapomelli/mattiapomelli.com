import { ReactNode } from 'react'
import classNames from 'classnames'

interface TextProps {
  children: ReactNode
  className?: string
}

export const H1 = ({ children, className }: TextProps) => (
  <h1
    className={classNames(
      'text-text-primary text-4xl md:text-5xl font-extrabold tracking-tight',
      className,
    )}
  >
    {children}
  </h1>
)

export const H3 = ({ children, className }: TextProps) => (
  <h3
    className={classNames(
      'text-text-primary text-3xl md:text-4xl font-extrabold tracking-tight',
      className,
    )}
  >
    {children}
  </h3>
)

export const H4 = ({ children, className }: TextProps) => (
  <h4
    className={classNames(
      'text-text-primary text-2xl md:text-2xl font-extrabold tracking-tight leading-tight',
      className,
    )}
  >
    {children}
  </h4>
)

export const Text = ({ children, className }: TextProps) => (
  <p className={classNames('text-text-secondary md:text-lg ml-0.5', className)}>
    {children}
  </p>
)

export const TextSmall = ({ children, className }: TextProps) => (
  <p className={classNames('text-text-secondary leading-snug', className)}>
    {children}
  </p>
)
