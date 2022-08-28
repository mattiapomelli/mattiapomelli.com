import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="h-2 w-full bg-main-blue dark:bg-main-light-blue"></div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-8 md:px-10 pb-14">
        {children}
        <Footer />
      </main>
    </>
  )
}
