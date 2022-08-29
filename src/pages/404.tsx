import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { H1 } from '@/components/Text'

const title = '404 – Mattia Pomelli'

export default function NotFound() {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mt-20 mb-64">
        <H1 className="mb-5">404 – Not Found</H1>
        <Link href="/">
          <a className="py-2 px-4 mb-6 text-center rounded-md bg-secondary text-primary">
            Go to home
          </a>
        </Link>
      </div>
    </>
  )
}
