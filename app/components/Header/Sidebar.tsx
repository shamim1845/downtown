"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faXmark, faRss } from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
}

export default function Sidebar({ isOpen, onClose, navItems }: SidebarProps) {
  // toogle scrollbar
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-20 ${isOpen ? 'bg-opacity-75 opacity-100 pointer-events-auto' : 'bg-opacity-0 opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Cross Button */}
      <button
        onClick={onClose}
        className={`fixed right-1 top-1 p-2 z-50 rounded transition-all duration-300 ${isOpen ? 'rotate-90 opacity-100 pointer-events-auto' : 'rotate-0 opacity-0 pointer-events-none'
          }`}
        aria-label="Close menu"
      >
        <FontAwesomeIcon icon={faXmark} color="#ffffff" size="xl" />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Search Box */}
          <div className="p-5 border-b border-gray-200">
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-500"
                style={{
                  boxShadow: "inset 0 2px 2px rgba(0, 0, 0, .05)",
                }}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-5 py-2 font-condensed font-semibold text-[18px] capitalize"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer with Social Icons */}
          <div className="p-4 mt-5 mb-2">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} color="#45629f" size="lg" />
              </a>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="#"
                className="text-orange-600 transition-colors"
                aria-label="RSS"
              >
                <FontAwesomeIcon icon={faRss} size="lg" />
              </a>
            </div>
            <p className="text-[11px] font-condensed text-[#757575] mt-5">
              © 2026 <span className="border-b border-[#757575]">JNews</span> -
              Premium WordPress news & magazine theme by{" "}
              <span className="border-b border-[#757575]">Jegtheme</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
