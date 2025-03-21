"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import back from "@/assets/building011.jpg";

export default function HeroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Custom Cursor */}
      <div className="fixed pointer-events-none z-[9999]">
        {/* Outer Circle */}
        <div
          className="absolute w-12 h-12 border-2 border-[#344680] rounded-full transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${cursorPosition.x - 24}px, ${cursorPosition.y - 24}px)`,
          }}
        ></div>
        {/* Inner Dot */}
        <div
          className="absolute w-2 h-2 bg-[#344680] rounded-full transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px)`,
          }}
        ></div>
      </div>

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
              <Link href="/" className="hover:text-[#344680]">Home</Link>
              <Link href="/about" className="hover:text-[#344680]">About Us</Link>
              <Link href="/listing" className="hover:text-[#344680]">Listing</Link>
              <Link href="/blog" className="hover:text-[#344680]">Blog</Link>
              <Link href="/contact" className="hover:text-[#344680]">Contact</Link>

              {/* Post Property Button */}
              <Link href="/post-property">
                <button className="cursor-pointer relative flex items-center bg-white px-4 py-1 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition">
                  <span className="text-black text-sm font-semibold">Post property</span>
                  <div className="relative ml-2 px-1 py-0 bg-green-600 text-white text-xs font-bold rounded overflow-hidden">
                    FREE
                    <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-white/10 to-white/50 opacity-90 animate-slide-shine"></span>
                  </div>
                </button>
              </Link>
            </nav>

            {/* User Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="p-2">
                <User className="h-6 w-6" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mx-auto px-4 bg-white text-black shadow-lg rounded-lg py-2">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
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
