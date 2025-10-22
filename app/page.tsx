import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { EthicalCompany } from "@/components/ethical-company"
import { WhyEthical } from "@/components/why-ethical"
import { History } from "@/components/history"
import { Philosophy } from "@/components/philosophy"
import { Products } from "@/components/products"
import { Territory } from "@/components/territory"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EthicalCompany />
      <WhyEthical />
      <History />
      <Philosophy />
      <Products />
      <Territory />
      <Footer />
    </main>
  )
}
