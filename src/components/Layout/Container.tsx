import { ReactNode } from 'react'
import classNames from 'classnames'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={classNames(
        'w-full max-w-3xl mx-auto px-6 md:px-10',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container
