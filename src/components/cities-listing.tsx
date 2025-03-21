import Image from "next/image"
import Link from "next/link"
import Place from "@/assets/india.jpg"
import Place1 from "@/assets/new york.jpg"
import Place2 from "@/assets/canada.avif"
import Place3 from "@/assets/india.jpg"
import Place4 from "@/assets/new york.jpg"
import Place5 from "@/assets/canada.avif"

export default function CitiesListing() {
  const cities = [
    { id: 1, name: "India", image: Place },
    { id: 2, name: "New York", image: Place1 },
    { id: 3, name: "Canada", image: Place2 },
    { id: 4, name: "India", image: Place3 },
    { id: 5, name: "New York", image: Place4 },
    { id: 6, name: "Canada", image: Place5 },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Cities With Listing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link href={`/cities/${city.name.toLowerCase()}`} key={city.id}>
              <div className="relative rounded-lg overflow-hidden h-48 group">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white text-navy-800 px-6 py-2 rounded-full font-medium">{city.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

