"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="font-bold text-xl">Logo</div>
        </Link>

        {/* Desktop Navigation - Moved to Right */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
  <Link href="/" className="font-medium hover:text-blue-700">Home</Link>
  <Link href="/about" className="font-medium hover:text-blue-700">About Us</Link>
  <Link href="/listing" className="font-medium hover:text-blue-700">Listing</Link>
  <Link href="/blog" className="font-medium hover:text-blue-700">Blog</Link>
  <Link href="/contact" className="font-medium hover:text-blue-700">Contact</Link>
</nav>


        {/* Right Side Icons (User Dropdown) */}
        <div className="relative flex items-center space-x-4 ml-4" ref={dropdownRef}>
          {/* User Icon */}
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="p-2">
            <User className="h-6 w-6" />
          </button>

          {/* User Dropdown - Auto-close on outside click */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-lg py-2 translate-y-22">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/listing" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Listing</Link>
            <Link href="/blog" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
