"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Facebook, Search, X } from "lucide-react";

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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-40"
          onClick={onClose}
        />
      )}

      {/* Cross Button */}
      {isOpen && (
        <button
          onClick={onClose}
          className="fixed right-1 top-1 p-2 z-50 rounded transition-all"
          aria-label="Close menu"
        >
          <X color="#ffffff" size={28} />
        </button>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
                <Search size={17} />
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
                <Facebook color="#45629f" />
              </a>
              <a
                href="#"
                className="hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-orange-600 transition-colors"
                aria-label="RSS"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368C10.58 4.858 19.152 13.406 19.183 24h4.817C23.97 10.769 13.245.048 0 0v4.812z" />
                </svg>
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
