"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Villa from "@/assets/structure building.avif";

export default function PropertyType() {
  return (
    <section className="rounded-md mx-10 px-20 py-12 mt-10 bg-[#15284F]"> {/* Dark navy background */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Section - Title, Description, and Buttons */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">Explore by <br /> Property Type</h2>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="h-12 w-12 flex items-center justify-center bg-gray-300 rounded-full shadow-md hover:bg-gray-400">
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>
            <button className="h-12 w-12 flex items-center justify-center bg-gray-300 rounded-full shadow-md hover:bg-gray-400">
              <ChevronRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative w-100 h-72">
            <Image 
              src={Villa} // Replace with your image
              alt="Residential Apartments"
              className="w-full h-full object-cover rounded-lg shadow-lg bg-white opacity-70"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
              {/* Stacking Text Vertically */}
              <h3 className="text-black text-3xl font-bold">Residential</h3>
              <h3 className="text-[#1b4db3] text-3xl font-bold mt-1 text-shadow-black">Apartments</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
