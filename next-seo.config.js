const title = 'Mattia Pomelli'
const description = 'Nomad Builder'
const url = 'https://mattiapomelli.com'
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
        alt: 'Mattia Pomelli',
        type: 'image/png',
      },
    ],
  },
}

export default SEO
