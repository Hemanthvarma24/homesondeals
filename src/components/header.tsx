"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="font-bold text-xl">Logo</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="/listing" className="font-medium hover:text-primary">
            Listing
          </Link>
          <Link href="/blog" className="font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/listing" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
              Listing
            </Link>
            <Link href="/blog" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="font-medium hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

