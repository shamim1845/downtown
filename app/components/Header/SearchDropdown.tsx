import { Search } from "lucide-react";

interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDropdown({
  isOpen,
  onClose,
}: SearchDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-transparent bg-opacity-30 z-40"
        onClick={onClose}
      />

      {/* Search dropdown - positioned below navigation */}
      <div className="absolute left-0 right-0  bg-transparent z-50">
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
              <Search size={18} color="#888" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
