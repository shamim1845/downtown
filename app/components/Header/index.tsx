"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import SearchDropdown from "./SearchDropdown";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

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
        {/* Mobile Header - Shows on small screens */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-black">
            {/* Hamburger Menu Button */}
            <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />

            {/* Centered Logo */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <Image 
                src="/logo_mobile.png" 
                alt="The Downtown" 
                width={150} 
                height={20}
                priority
              />
            </Link>

            {/* Search Icon */}
            <SearchButton 
              isOpen={isSearchOpen} 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
            />
          </div>
        </div>

        {/* Desktop Header - Shows on medium screens and up */}
        <div className="hidden md:block">
          {/* Logo Section - Top */}
          <div className="border-b border-black h-[90px]">
            <div className="w-full h-full flex items-center justify-center px-2">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="The Downtown" 
                  width={184} 
                  height={23}
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Navigation Section with Hamburger and Search - Bottom */}
          <nav className="bg-white">
            <div className="px-2">
              <div className="flex items-center justify-between py-2">
                {/* Hamburger Menu Button */}
                <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />

                {/* Navigation Links - Centered */}
                <ul className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 flex-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`nav-link text-[15px] font-condensed font-bold transition-colors duration-200 uppercase tracking-wide text-black ${
                          pathname === item.href ? "active" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Search Icon */}
                <SearchButton 
                  isOpen={isSearchOpen} 
                  onClick={() => setIsSearchOpen(!isSearchOpen)} 
                />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Search Popup - Dropdown Below Navigation */}
      <SearchDropdown 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
