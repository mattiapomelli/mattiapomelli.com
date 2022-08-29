import classNames from 'classnames'

interface TextProps {
  children: string
  className?: string
}

export const H1 = ({ children, className }: TextProps) => (
  <h1
    className={classNames('text-5xl font-extrabold tracking-tight', className)}
  >
    {children}
  </h1>
)

export const H3 = ({ children, className }: TextProps) => (
  <h3
    className={classNames('text-4xl font-extrabold tracking-tight', className)}
  >
    {children}
  </h3>
)

export const H4 = ({ children, className }: TextProps) => (
  <h4
    className={classNames(
      'text-2xl font-extrabold tracking-tight leading-none',
      className,
    )}
  >
    {children}
  </h4>
)

export const Text = ({ children, className }: TextProps) => (
  <p
    className={classNames(
      'text-lg ml-0.5 text-dark-gray dark:text-gray-300',
      className,
    )}
  >
    {children}
  </p>
)

export const TextSmall = ({ children, className }: TextProps) => (
  <p
    className={classNames(
      'text-dark-gray dark:text-gray-300 leading-snug',
      className,
    )}
  >
    {children}
  </p>
)
