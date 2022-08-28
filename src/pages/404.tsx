import Link from 'next/link'
import { NextSeo } from 'next-seo'

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
        <h1 className="font-extrabold text-3xl md:text-5xl tracking-tight mb-6 text-center">
          404 – Not Found
        </h1>
        <Link href="/">
          <a className="py-2 px-4 mb-6 text-center rounded-md bg-light-blue-gray dark:bg-dark-blue-600 text-main-blue dark:text-main-light-blue">
            Go to home
          </a>
        </Link>
      </div>
    </>
  )
}
