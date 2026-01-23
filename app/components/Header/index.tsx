"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import Sidebar from "./Sidebar";
import SearchDropdown from "./SearchDropdown";


// Navigation Items
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        if (currentScrollY < lastScrollY.current) {
          // Scrolling UP
          setIsSticky(true);
        } else {
          // Scrolling DOWN
          setIsSticky(false);
        }
      } else {
        setIsSticky(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <header className="bg-white">
        <MobileHeader
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />

        <DesktopHeader
          isSticky={isSticky}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          navItems={navItems}
          pathname={pathname}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
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
