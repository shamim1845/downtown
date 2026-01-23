import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      {isOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />}
    </button>
  );
}
