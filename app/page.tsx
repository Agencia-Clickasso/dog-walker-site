import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Features from "@/components/features"
import Team from "@/components/team"
import Neighborhoods from "@/components/neighborhoods"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Team />
      <Neighborhoods />
    </main>
  )
}

