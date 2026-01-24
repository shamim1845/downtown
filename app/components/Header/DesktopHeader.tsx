import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import { NavItem } from ".";



interface DesktopHeaderProps {
    isSticky: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    navItems: NavItem[];
    pathname: string;
    isSearchOpen: boolean;
    setIsSearchOpen: (isOpen: boolean) => void;
}

export default function DesktopHeader({
    isSticky,
    setIsMobileMenuOpen,
    navItems,
    pathname,
    isSearchOpen,
    setIsSearchOpen,
}: DesktopHeaderProps) {
    return (
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
            <div
                className={`transition-all duration-100 ease-in-out ${isSticky
                    ? "fixed top-0 left-0 right-0 z-20 bg-white shadow-md translate-y-0"
                    : "relative translate-y-0"
                    }`}
            >
                <nav className="border-b border-transparent">
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
            {/* Placeholder to prevent layout shift when nav becomes fixed */}
            {isSticky && <div className="h-[50px]"></div>}
        </div>
    );
}
