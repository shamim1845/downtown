import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        // Mobile: Use fontawesome icon
        <FontAwesomeIcon icon={faBars} size="xl" />
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
