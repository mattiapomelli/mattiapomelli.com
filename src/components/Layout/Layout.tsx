import { ReactNode } from 'react'

import Container from './Container'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-2 w-full bg-primary" />
      <Navbar />
      <main className="flex-grow">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
