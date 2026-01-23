import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDropdown({
  isOpen,
  onClose,
}: SearchDropdownProps) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-transparent transition-opacity duration-100 z-40 ${isOpen ? 'bg-opacity-30 opacity-100 pointer-events-auto' : 'bg-opacity-0 opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Search dropdown - positioned below navigation */}
      <div
        className={`absolute left-0 right-0 bg-transparent z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
      >
        <div className="lg:max-w-[350px] mx-auto lg:ml-auto lg:mr-0 bg-white relative">
          {/* Arrow (Rotated Square) */}
          <div className="absolute -top-[5px] right-[19px] z-[100] w-[12px] h-[12px] border-t border-l border-b border-r border-t-[#eaeaea] border-l-[#eaeaea] border-b-[#ffffff] border-r-[#ffffff] rotate-45  bg-white " />
          {/* Search Form */}
          <form className="relative border-t border-[#eee] p-5 bg-white z-[99]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-12 text-base border border-[#e0e0e0] transition-shadow ease-in-out focus:outline-none focus:shadow-[inset_0_0_15px_0_rgba(0,0,0,0.08)] placeholder:text-gray-500"
            />
            <button className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" color="#888" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
