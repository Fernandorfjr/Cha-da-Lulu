import { SiteHeader } from './components/SiteHeader'
import { AboutLuisa } from './sections/AboutLuisa'
import { AboutTea } from './sections/AboutTea'
import { Closing } from './sections/Closing'
import { Footer } from './sections/Footer'
import { GiftList } from './sections/GiftList'
import { Hero } from './sections/Hero'
import { Pix } from './sections/Pix'

function App() {
  return (
    <main id="topo" className="page-shell">
      <SiteHeader />
      <Hero />
      <AboutLuisa />
      <AboutTea />
      <GiftList />
      <Pix />
      <Closing />
      <Footer />
    </main>
  )
}

export default App
