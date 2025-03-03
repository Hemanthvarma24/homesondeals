"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative h-[500px] md:h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mb-6">
          Find Your Best Dream House for Rental, Buy & Sell...
        </h1>

        {/* Search Bar */}
        <div className="bg-white rounded-md flex items-center p-2 max-w-xl">
          <Search className="h-5 w-5 text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search by Locality, Builder or # projects"
            className="flex-1 p-2 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Buy Now</Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full p-2">
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}

