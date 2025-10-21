'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/generated/qmed-logo.png"
              alt="Q-MED Devices"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              Products
            </Link>
            <Link
              href="/catalog"
              className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/catalog"
              className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/quote"
              className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors">
              <span>English</span>
              <span className="text-xs">🇬🇧</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/catalog"
                className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/catalog"
                className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/quote"
                className="text-sm font-medium uppercase tracking-wide text-gray-700 hover:text-[#1E3A8A]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
