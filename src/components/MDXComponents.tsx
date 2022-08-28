import Image from 'next/image'
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

const MDXComponents = {
  Image,
  a: CustomLink,
}

export default MDXComponents
