"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "NEWS", href: "/news" },
    { label: "POLITICS", href: "/politics" },
    { label: "BUSINESS", href: "/business" },
    { label: "NATIONAL", href: "/national" },
    { label: "CULTURE", href: "/culture" },
    { label: "OPINION", href: "/opinion" },
    { label: "LIFESTYLE", href: "/lifestyle" },
    { label: "SPORTS", href: "/sports" },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200">
        {/* Logo Section - Top */}
        <div className="border-b border-black">
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 text-center">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="The Downtown" 
                width={184} 
                height={23}
                // className="h-8 md:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Navigation Section with Hamburger and Search - Bottom */}
        <nav className="bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="Open menu"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Navigation Links - Centered */}
              <ul className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 flex-1">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`text-xs md:text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                        index === 0
                          ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Popup - Right Aligned Dropdown */}
      {isSearchOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Search dropdown */}
          <div className="fixed top-0 right-0 w-full md:w-96 bg-white shadow-xl z-50 border-l border-gray-200">
            <div className="border-b-2 border-red-500 p-6">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="w-full px-4 py-3 pr-12 text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                  aria-label="Close search"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Search Results Area */}
            <div className="p-6 max-h-[calc(100vh-120px)] overflow-y-auto">
              <p className="text-gray-500 text-sm text-center">Start typing to search...</p>
            </div>
          </div>
        </>
      )}

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
