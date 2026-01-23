import Link from "next/link";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";

interface MobileHeaderProps {
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    isSearchOpen: boolean;
    setIsSearchOpen: (isOpen: boolean) => void;
}

export default function MobileHeader({
    setIsMobileMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
}: MobileHeaderProps) {
    return (
        <div
            className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)" }}
        >
            <div className="w-full mx-auto flex items-center justify-between px-[15px] h-[60px]">
                {/* Hamburger Menu Button */}
                <HamburgerButton
                    onClick={() => setIsMobileMenuOpen(true)}
                    variant="mobile"
                />

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
    );
}
