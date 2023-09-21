import { ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

const CustomLink = ({ href, ...rest }: { href?: string }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

interface ImageComponentProps extends ImageProps {
  caption?: ReactNode
}

const MDXComponents = {
  Image: ({ caption, src, alt, ...props }: ImageComponentProps) => (
    <div className="flex flex-col items-center">
      <Image src={src} alt={alt} {...props} />
      {caption && (
        <p className="text-[12px] text-text-secondary text-opacity-60">
          {caption}
        </p>
      )}
    </div>
  ),
  a: CustomLink,
}

export default MDXComponents
