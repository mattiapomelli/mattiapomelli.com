import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mattiapomelli" />
        <meta name="twitter:title" content="Mattia Pomelli - Web Developer" />
        <meta
          name="twitter:description"
          content="Blockchain & Full Stack Web Developer."
        />
        <meta
          name="twitter:image"
          content="https://tiapome.com/static/images/banner.png"
        />
        <meta name="twitter:image:alt" content="Web Development" />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-v6-latin-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
