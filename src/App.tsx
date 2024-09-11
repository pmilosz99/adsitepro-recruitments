import './App.css'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Seo } from './components/SEO'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <Seo />
      <Footer />
    </>

  )
}

export default App
