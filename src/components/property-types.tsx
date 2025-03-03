"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PropertyTypes() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const propertyTypes = [
    {
      id: 1,
      title: "Commercial",
      description: "OFFICE/RETAIL/SHOP/GODOWN/INDUSTRIAL/LAND/FACTORY",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      title: "Residential Apartments",
      description: "Luxury living spaces",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % propertyTypes.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + propertyTypes.length) % propertyTypes.length)
  }

  return (
    <section className="py-12 bg-navy-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore by</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-8">Property Type</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold">{propertyTypes[currentSlide].title}</h4>
            <p className="text-sm">{propertyTypes[currentSlide].description}</p>

            <div className="flex space-x-2 pt-4">
              <button onClick={prevSlide} className="bg-white/20 rounded-full p-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextSlide} className="bg-white/20 rounded-full p-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative h-64 md:h-80">
            <Image
              src={propertyTypes[currentSlide].image || "/placeholder.svg"}
              alt={propertyTypes[currentSlide].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

