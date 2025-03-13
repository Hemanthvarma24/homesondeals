"use client"

import { useState } from "react"
import Image from "next/image"

import ViolinImg1 from "@/assets/imagebg.jpeg"
import ViolinImg2 from "@/assets/imagebg01.jpeg"
import ViolinImg3 from "@/assets/imagebg02.webp"
import ViolinImg4 from "@/assets/building.jpg"

export default function FeaturedProperties() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = [
    {
      id: 2,
      title: "Kadence, Vivaldi 4/4 Violin with",
      description: "Bow, Rosin, Hard Case",
      model: "(Brown Glossy V001C)",
      priceRange: "75 – 95 lk",
      image: ViolinImg1,
    },
    {
      id: 2,
      title: "Kadence, Vivaldi 4/4 Violin with",
      description: "Bow, Rosin, Hard Case",
      model: "(Brown Glossy V001C)",
      priceRange: "75 – 95 lk",
      image: ViolinImg2,
    },
    {
      id: 2,
      title: "Kadence, Vivaldi 4/4 Violin with",
      description: "Bow, Rosin, Hard Case",
      model: "(Brown Glossy V001C)",
      priceRange: "75 – 95 lk",
      image: ViolinImg3,
    },
    {
      id: 2,
      title: "Kadence, Vivaldi 4/4 Violin with",
      description: "Bow, Rosin, Hard Case",
      model: "(Brown Glossy V001C)",
      priceRange: "75 – 95 lk",
      image: ViolinImg4,
    },
  ]

  const propertiesPerSlide = 4
  const totalSlides = Math.ceil(properties.length / propertiesPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const visibleProperties = properties.slice(
    currentSlide * propertiesPerSlide,
    currentSlide * propertiesPerSlide + propertiesPerSlide
  )

  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Properties for Sales</h2>

        <div className="relative flex justify-center items-center w-full max-w-4xl">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
            {visibleProperties.map((property) => (
              <div key={property.id} className="relative overflow-hidden rounded-lg w-[450px] h-[300px] bg-[#1a2e4c] flex items-center justify-center">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                  <h3 className="text-xl font-medium">{property.title}</h3>
                  <p className="text-lg">{property.subtitle}</p>
                  <p className="text-lg">{property.description}</p>
                  <p className="text-lg mb-2">{property.model}</p>
                  <div className="mt-1">
                    <p className="text-4xl font-bold">{property.priceRange}</p>
                    <p className="text-2xl font-bold mb-4">{property.unit}</p>
                  </div>
                  <button className="absolute bottom-7 bg-white text-[#1a4db2] font-bold py-2 px-6 rounded-sm text-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}