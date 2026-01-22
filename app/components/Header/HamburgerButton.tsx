import { Menu } from "lucide-react";

interface HamburgerButtonProps {
  onClick: () => void;
  variant?: "mobile" | "desktop";
}

export default function HamburgerButton({
  onClick,
  variant = "desktop",
}: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded transition-colors flex-shrink-0"
      aria-label="Open menu"
    >
      {variant === "mobile" ? (
        // Mobile: Use lucid icon
        <Menu size={22} />
      ) : (
        // Desktop: Use custom CSS hamburger
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </button>
  );
}
