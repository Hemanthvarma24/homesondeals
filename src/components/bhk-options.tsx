"use client";

import { Home } from "lucide-react";
import Image from "next/image";
import VillaImg from "@/assets/villa.jpg";
import Bhk2Img from "@/assets/imagebg01.jpeg";
import Bhk3Img from "@/assets/imagebg02.webp";

export default function BhkOptions() {
  return (
    <section className="rounded-md mx-0 lg:mx-12 px-6 py-12 mt-8 bg-[#15284F]">
      <div className="max-w-6xl mx-auto text-white">
        {/* Title & Description */}
        <div className="flex items-center space-x-3">
          <Home className="h-8 w-8 text-white" />
          <h2 className="text-2xl md:text-4xl font-bold">BHK choice in mind?</h2>
        </div>
        <p className="text-gray-300 mt-2 text-lg md:text-xl">
          Browse by number of bedrooms in the house
        </p>

        {/* BHK Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Villa", description: "Luxury Properties", image: VillaImg },
            { title: "2 BHK", description: "650+ Properties", image: Bhk2Img },
            { title: "3 BHK", description: "650+ Properties", image: Bhk3Img },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-blue rounded-xl p-6 shadow-md border border-gray-300 flex flex-col items-start justify-center h-[180px] md:h-[200px] md:w-[280px] transition hover:shadow-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 opacity-60"
              />
              <h3 className="text-3xl md:text-4xl font-extrabold text-white relative z-10">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-white mt-1 relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
