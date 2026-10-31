
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Home", "Services", "About", "Gallery"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-[7%] py-5 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#E8D8CA]/60 bg-[#F7F1EA]/75 shadow-sm backdrop-blur-xl"
          : "bg-[#F7F1EA]"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-[2px] text-[#332820]">
          HOUSE OF DIMES
        </h2>

        <ul className="hidden items-center gap-9 text-sm font-medium text-[#6E5548] md:flex">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer transition-colors duration-300 hover:text-[#332820]"
            >
              {link}
            </li>
          ))}
        </ul>

        <button className="hidden rounded-sm bg-[#6E5548] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#332820] md:block">
          Book Appointment
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#332820] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mt-6 border-t border-[#E8D8CA] pt-5 md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-medium text-[#6E5548]">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer hover:text-[#332820]"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full rounded-sm bg-[#6E5548] px-6 py-3 text-sm font-medium text-white"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
