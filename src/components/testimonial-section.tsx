"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import  homebg  from"@/assets/homebg.jpg"
import professional from"@/assets/professional.jpg"

import { StaticImageData } from "next/image";

type Testimonial = {
  id: number;
  name: string;
  image: string | StaticImageData; // Allow both string URLs and imported images
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "K.P. Harikrishna",
    image: professional, // Use a string URL instead
    quote: "Discover the Symphony Within You with our Exceptional Instruments",
  },
  {
    id: 2,
    name: "IBRAHIM",
    image: homebg,
    quote: "Discover the Symphony Within You with our Exceptional Instruments",
  },
  {
    id: 3,
    name: "SABARI",
    image: professional,
    quote: "Discover the Symphony Within You with our Exceptional Instruments",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={homebg}
          alt="Modern house background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center text-white mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <br />
          </h2>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">Testimonials</h3>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={previousTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto relative">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-white mb-4">{testimonials[currentIndex].name}</h4>

              <p className="text-xl text-gray-200 italic max-w-2xl mx-auto mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

