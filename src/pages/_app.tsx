import '../styles/globals.css'

import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import SEO from '../../next-seo.config'
import Layout from '../components/Layout'
import MDXComponents from '../components/MDXComponents'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
