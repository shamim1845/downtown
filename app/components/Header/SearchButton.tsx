import { Search, X } from "lucide-react";

interface SearchButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function SearchButton({ isOpen, onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded transition-colors flex-shrink-0 cursor-pointer z-50"
      aria-label="Search"
    >
      {isOpen ? <X size={18}/> : <Search size={18} />}
    </button>
  );
}
