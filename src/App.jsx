import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Support from './components/sections/Support'
import FAQ from './components/sections/FAQ'
import Pricing from './components/sections/Pricing'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <main id="main-content">
        <Hero />
        <Features />
        <Support />
        <FAQ />
        <Pricing />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
