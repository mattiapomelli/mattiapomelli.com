import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { DefaultSeo } from 'next-seo'

import MDXComponents from '../components/MDXComponents'
import Layout from '../components/Layout'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
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
