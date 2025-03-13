"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Image01 from "@/assets/family.jpg";
import Image02 from "@/assets/villa.jpg";
import Image03 from "@/assets/building.jpg";

export default function PropertyOptions() {
  const options = [
    {
      title: "Buy a Property",
      image: Image01, // building011
    },
    {
      title: "Sell a Property",
      image: Image02, // building
    },
    {
      title: "Rent a Property",
      image: Image03, // family
    },
  ];

  return (
    <section className="px-4 py-8 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">What we doing</h2>

      {/* Property Options */}
      <div className="flex justify-center items-center gap-14">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[450px] rounded-2xl shadow-lg border border-gray-300"
          >
            <Image
              src={option.image}
              alt={option.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />

            {/* Button-like Text Box (Half inside, half outside) */}
            <div className="absolute left-4 right-4 top-[26rem] bg-white opacity-80 text-black flex justify-between items-center px-4 py-5 rounded-xl shadow-lg hover:bg-[#1b4db3] hover:text-white transition cursor point">
              <span className="text-lg sm:text-2xl font-extrabold">{option.title}</span>
              
              {/* Circle Around Arrow */}
              <div className=" text-black hover:text-white w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full shadow-md hover:bg-gray-500 transition">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
