const title = 'Mattia Pomelli - Web Developer'
const description = 'Blockchain & Full Stack Web Developer.'
const url = 'https://tiapome.com'
const image = `${url}/static/images/banner.png`

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title,
    description,
    images: [
      {
        url: image,
      },
    ],
  },
  twitter: {
    handle: '@mattiapomelli',
    site: '@mattiapomelli',
    cardType: 'summary',
  },
}

export default SEO
