import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 font-sans py-20">
            <h1 className="text-[150px] md:text-[200px] leading-none font-bold text-gray-100 select-none">
                404
            </h1>
            <h2 className="text-3xl font-bold text-black mt-[-40px] md:mt-[-60px] uppercase relative z-10">
                Page Not Found
            </h2>
            <p className="text-gray-500 mt-4 mb-8 max-w-md">
                It looks like nothing was found at this location. Maybe try a search?
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-md relative mb-8">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-[50px] border-2 border-[#e0e0e0] px-5 pr-12 focus:outline-none focus:border-black transition-colors"
                />
                <button className="absolute right-0 top-0 h-[50px] w-[50px] flex items-center justify-center text-gray-500 hover:text-black">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
                </button>
            </div>

            <Link
                href="/"
                className="bg-black text-white px-8 py-3 uppercase font-bold text-sm tracking-wider hover:bg-gray-800 transition-colors"
            >
                Back To Home
            </Link>
        </div>
    );
}
