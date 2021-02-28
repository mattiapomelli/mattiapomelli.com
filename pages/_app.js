import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import MDXComponents from '../components/MDXComponents'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
