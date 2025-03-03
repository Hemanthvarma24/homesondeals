"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PropertyCard from "@/components/property-card"

export default function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = [
    {
      id: 1,
      location: "Kolkata, Vedant Art Vista",
      type: "Rent, Ready, Resell Flat",
      priceRange: "75-95",
      unit: "lk",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      location: "Kolkata, Vedant Art Vista",
      type: "Rent, Ready, Resell Flat",
      priceRange: "75-95",
      unit: "lk",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      location: "Kolkata, Vedant Art Vista",
      type: "Rent, Ready, Resell Flat",
      priceRange: "75-95",
      unit: "lk",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      location: "Kolkata, Vedant Art Vista",
      type: "Rent, Ready, Resell Flat",
      priceRange: "75-95",
      unit: "lk",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(properties.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(properties.length / 2)) % Math.ceil(properties.length / 2))
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Properties for Sales</h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.slice(currentSlide * 2, currentSlide * 2 + 2).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

