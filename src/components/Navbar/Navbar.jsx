
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Services", "About", "Gallery"];

  return (
    <nav className="bg-[#F7F1EA] px-[7%] py-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-semibold tracking-[2px] text-[#332820]">
          HOUSE OF DIME
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-[#6E5548]">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer transition-colors duration-300 hover:text-[#332820]"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Desktop Booking Button */}
        <button className="hidden md:block rounded-sm bg-[#6E5548] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#332820]">
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[#332820]"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-6 border-t border-[#E8D8CA] pt-5 md:hidden">
          <ul className="flex flex-col gap-5 text-sm font-medium text-[#6E5548]">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer transition-colors duration-300 hover:text-[#332820]"
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full rounded-sm bg-[#6E5548] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#332820]"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
}
