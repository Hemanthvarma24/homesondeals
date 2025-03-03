import Hero from "@/components/hero"
import BhkOptions from "@/components/bhk-options"
import FeaturedProperties from "@/components/featured-properties"
import CitiesListing from "@/components/cities-listing"
import PropertyTypes from "@/components/property-types"
import Services from "@/components/services"
import Partners from "@/components/partners"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BhkOptions />
      <FeaturedProperties />
      <CitiesListing />
      <PropertyTypes />
      <Services />
      <Partners />
    </main>
  )
}

