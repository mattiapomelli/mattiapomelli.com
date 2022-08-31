import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { H1, Text } from '@/components/Text'

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
      <div className="flex flex-col items-center mt-5">
        <H1 className="mb-5">404 – Not Found</H1>
        <Text className="mb-6">Are you lost? 👀</Text>
        <Link href="/">
          <a className="py-3 px-6 mb-6 text-center bg-secondary rounded-md text-primary font-bold">
            Go to home
          </a>
        </Link>
      </div>
    </>
  )
}
