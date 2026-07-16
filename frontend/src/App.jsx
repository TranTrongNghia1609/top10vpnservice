import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompareTable from './components/CompareTable'
import ReviewCard from './components/ReviewCard'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [selectedVpn, setSelectedVpn] = useState(null)

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <CompareTable onReview={(vpn) => setSelectedVpn(vpn)} />
        <FAQ />
      </main>
      <Footer />

      {/* Review Modal */}
      {selectedVpn && (
        <ReviewCard
          vpn={selectedVpn}
          onClose={() => setSelectedVpn(null)}
        />
      )}
    </div>
  )
}
