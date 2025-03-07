import BhkOptions from "@/components/bhk-options";
import CitiesListing from "@/components/cities-listing";
import FeaturedProperties from "@/components/featured-properties";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import PropertyTypes from "@/components/property-types";
import Services from "@/components/services";

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
    </main>
  );
}
