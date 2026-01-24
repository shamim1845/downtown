import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRss,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF as faFacebookFD,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const RECENT_NEWS = [
    {
        title: "Grab tackles Jakarta's odd-even license plate policy with special algorithm",
        date: "July 6, 2018",
        href: "#",
    },
    {
        title: "Jokowi supporters try to prevent anti-Jokowi activist from entering Batam",
        date: "July 5, 2018",
        href: "#",
    },
    {
        title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
        date: "July 4, 2018",
        href: "#",
    },
];

const CATEGORIES = [
    "Business",
    "Opinion",
    "Culture",
    "Politics",
    "Lifestyle",
    "Sports",
    "National",
    "Travel",
    "News",
    "World",
];

const Footer = () => {
    return (
        <footer id="footer" className="bg-white pt-[60px] pb-[20px] md:pb-[22px] border-t border-gray-200 mt-12 font-sans">
            <div className="container mx-auto px-4 max-w-[1380px]">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 md:mb-12">

                    {/* Column 1: About */}
                    <div className="flex flex-col">
                        <Image src="/logo.png" alt="Logo" width={184} height={184} className="mb-5" />
                        <div className="space-y-1 mb-[14px]">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We bring you the best Premium WordPress Themes that perfect for news, magazine, personal blog, etc. Visit our landing page to see all features & demos.
                            </p>
                            <Link href="#" className="text-sm uppercase hover:underline mt-2 inline-block">
                                Learn More »
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className="md:hidden border-t border-black w-full"></div>
                    </div>

                    {/* Column 2: Recent News */}
                    <div className="hidden md:block">
                        <h3 className="text-base text-black font-bold mb-5">Recent News</h3>
                        <ul className="space-y-3">
                            {RECENT_NEWS.map((news, index) => (
                                <li key={index} className="">
                                    <Link href={news.href} className="text-sm font-semibold leading-tight mr-[5px]">
                                        {news.title}
                                    </Link>
                                    <span className="text-sm text-[#a0a0a0]">{news.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div className="hidden md:block">
                        <h3 className="text-base text-black font-bold mb-5">Categories</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-medium">
                            {CATEGORIES.map((category, index) => (
                                <Link key={index} href="#" className="text-sm font-semibold leading-tight mr-[5px]">
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-base text-black font-bold mb-2">Sign Up For Our Newsletter</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-[14px]">
                            Subscribe to our mailing list to receives daily updates direct to your inbox!
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full h-[40px] border-2 border-[#e0e0e0] px-[14px] py-[7px] text-[12px] focus:outline-none transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full h-[40px] bg-black text-white text-[13px] px-[20px] font-bold uppercase tracking-wider"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black w-full mb-6"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-4 text-[12px] text-[#666666]">
                    {/* Copyright */}
                    <div className="mb-4 lg:mb-0 space-y-1">
                        <p>&copy; 2018 JNews - City News Magazine WordPress theme. All rights belong to their respective owners.</p>
                        <p>JNews is a top selling 2018 WordPress News, Blog, Newspaper & Magazine Theme.</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-5">
                        <Link href="https://www.facebook.com/jegtheme/" target="_blank" rel="noopener noreferrer" className="text-black transition-colors" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookFD} className="w-4 h-4" />
                        </Link>
                        <Link href="https://twitter.com/jegtheme" target="_blank" rel="noopener noreferrer" className="text-black transition-colors" aria-label="Twitter">
                            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-black transition-colors" aria-label="Youtube">
                            <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" className="text-black transition-colors" aria-label="RSS">
                            <FontAwesomeIcon icon={faRss} className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
