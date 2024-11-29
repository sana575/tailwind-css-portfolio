
"use client"
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 md:px-8 lg:px-12 rounded-md h-14 sticky top-0 bg-gradient-to-r from-orange-700 to-black hover:from-black hover:to-orange-700 text-white shadow-lg shadow-orange-500/50 z-10">
      {/* Logo */}
      <div className="flex-1">
        <span className="text-white font-bold text-[20px] sm:text-[24px]">Sana&apos;s Portfolio</span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none"
      >
        {/* Hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-orange-700 md:bg-transparent z-20 md:z-auto`}>
        <ul className="flex flex-col md:flex-row md:gap-x-6 gap-y-4 md:gap-y-0 text-lg md:text-base p-4 md:p-0">
          <li>
            <Link href="/" className="hover:text-black transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-black transition-colors duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-black transition-colors duration-300">
              Service
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

