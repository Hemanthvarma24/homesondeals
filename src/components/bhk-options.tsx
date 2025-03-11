"use client";

import { Home } from "lucide-react";

export default function BhkOptions() {
  return (
    <section className=" mx-0 lg:mx-12 px-6 py-12 mt-8 bg-[#15284F]">
      <div className="max-w-6xl mx-auto text-white">
        {/* Title & Description */}
        <div className="flex items-center space-x-3">
          <Home className="h-8 w-8 text-white" />
          <h2 className="text-xl md:text-3xl font-bold">BHK choice in mind?</h2>
        </div>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Browse by number of bedrooms in the house
        </p>

        {/* BHK Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Villa", description: "Luxury Properties" },
            { title: "2 BHK", description: "650+ Properties" },
            { title: "3 BHK", description: "650+ Properties" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-300 flex flex-col items-start justify-center h-[180px] md:h-[200px] md:w-[280px] transition hover:shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
