"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import back from "@/assets/homebg.jpg";

export default function HeroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={back} alt="Hero Background" layout="fill" objectFit="cover" priority />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Logo</Link>
          <div className="flex items-center font-bold space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">About Us</Link>
              <Link href="/listing" className="hover:text-gray-300">Listing</Link>
              <Link href="/blog" className="hover:text-gray-300">Blog</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </nav>
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="p-2">
                <User className="h-6 w-6" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-white text-black shadow-lg rounded-lg py-2">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-0 top-full w-48 bg-white text-black shadow-md py-3 rounded-lg">
            <div className="flex flex-col space-y-3 px-4">
              <Link href="/" className="py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" className="py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/listing" className="py-2" onClick={() => setIsMenuOpen(false)}>Listing</Link>
              <Link href="/blog" className="py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mb-6">
          Find Your Best Dream House for Rental, Buy & Sell...
        </h1>
        <div className="bg-white rounded-full flex items-center p-2 w-full max-w-lg">
          <Search className="h-5 w-5 text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search by Locality, Builder or a project"
            className="flex-1 p-2 outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Buy Now</Button>
        </div>
      </div>
    </section>
  );
}
