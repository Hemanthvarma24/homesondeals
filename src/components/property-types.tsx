"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import homebg from"@/assets/homebg.jpg"
import Image from "next/image";

export default function PropertyType() {
  return (
    <section className="mx-10 py-12 mt-10 bg-[#15284F]"> {/* Dark navy background */}
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
          <div className="relative w-72 h-72">
            <Image src={homebg} // Replace with your image
              alt="Residential Apartments"
              className="w-full h-full object-fit rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h3 className="text-white text-lg font-bold">Residential Apartments</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
