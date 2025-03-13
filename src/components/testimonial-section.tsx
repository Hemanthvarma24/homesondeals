"use client"

import Image from "next/image"
import { useState } from "react"
import homebg from "@/assets/imagebg.jpeg"
import professional from "@/assets/professional.jpg"
import { StaticImageData } from "next/image"

type Testimonial = {
  id: number;
  name: string;
  image: string | StaticImageData;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "K.P. Harikrishna",
    image: professional,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={homebg} alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-20">
          <h2 className="text-5xl font-bold mb-6">Testimonials</h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
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

          <h4 className="text-2xl font-semibold text-white mb-4">
            {testimonials[currentIndex].name}
          </h4>

          <p className="text-xl text-gray-200 italic max-w-2xl mx-auto mb-4">
            "{testimonials[currentIndex].quote}"
          </p>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
