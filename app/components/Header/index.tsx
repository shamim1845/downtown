"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import SearchDropdown from "./SearchDropdown";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Politics", href: "/politics" },
    { label: "Business", href: "/business" },
    { label: "National", href: "/national" },
    { label: "Culture", href: "/culture" },
    { label: "Opinion", href: "/opinion" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Sports", href: "/sports" },
  ];

  return (
    <>
      <header className="bg-white">
        {/* Mobile Header - Shows on small screens */}
        <div className="lg:hidden">
          <div className="w-full mx-auto flex items-center justify-between px-[15px] h-[60px]">
            {/* Hamburger Menu Button */}
            <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} variant="mobile" />

            {/* Centered Logo */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src="/logo_mobile.png"
                alt="The Downtown"
                width={115}
                height={32}
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

        {/* Desktop Header - Shows on large screens and up */}
        <div className="hidden lg:block">
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
          <nav className="">
            <div className="px-4">
              <div className="flex items-center justify-between py-2">
                {/* Hamburger Menu Button */}
                <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />

                {/* Navigation Links - Centered */}
                <ul className="flex items-center justify-center md:space-x-[22px] flex-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`nav-link text-[15px] font-condensed font-bold transition-colors duration-200 uppercase tracking-wide text-black ${pathname === item.href ? "active" : ""
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
