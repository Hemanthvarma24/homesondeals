
import Hero from "@/components/hero"
import BhkOptions from "@/components/bhk-options"
import FeaturedProperties from "@/components/featured-properties"
import CitiesListing from "@/components/cities-listing"
import PropertyTypes from "@/components/property-types"
import Services from "@/components/services"
import Partners from "@/components/partners"
import { TestimonialSection } from "@/components/testimonial-section"
import Faq from "@/components/faq"
import Footer from"@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <Hero />
      <BhkOptions />
      <FeaturedProperties />
      <CitiesListing />
      <PropertyTypes />
      <Services />
      <Partners />
      <TestimonialSection/>
      <Faq/>
      <Footer/>
    </main>
  );
}
