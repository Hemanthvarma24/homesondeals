"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px)`,
        }}
      ></div>

      {/* Navbar */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Homesondeals🏠︎</h1>
      </header>

      {/* Hero Section */}
      <section className="p-8 bg-white shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">Sell or Rent Your Property</h2>
        <p className="text-gray-700 mb-4">Post your property online faster with 99acres.com</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Start Now</button>
      </section>

      {/* Property Form */}
      <section className="p-8 bg-white shadow-md max-w-lg mx-auto mt-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Post Your Property</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Property Title" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
          <input type="number" placeholder="Price" className="w-full p-2 border rounded" />
          <textarea placeholder="Description" className="w-full p-2 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>
      </section>

      {/* Steps Section */}
      <section className="p-8 text-center">
        <h3 className="text-2xl font-semibold mb-6">Post Your Property in 3 Simple Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md rounded-lg">1. Add details of your property</div>
          <div className="p-4 bg-white shadow-md rounded-lg">2. Upload Photos & Videos</div>
          <div className="p-4 bg-white shadow-md rounded-lg">3. Add Pricing & Ownership</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-8 bg-gray-200 text-center">
        <h3 className="text-2xl font-semibold mb-4">What Owners & Dealers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md rounded-lg">"Great platform for property sales." - User A</div>
          <div className="p-4 bg-white shadow-md rounded-lg">"Got genuine leads quickly!" - User B</div>
          <div className="p-4 bg-white shadow-md rounded-lg">"Highly recommended service!" - User C</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2025 99acres. All rights reserved.</p>
      </footer>
    </div>
  );
}
