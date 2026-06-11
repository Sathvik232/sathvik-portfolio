"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "about",
    "skills",
    "experience",
    "education",
    "projects",
    "certifications",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-10 h-20 flex justify-between items-center">

        <h1 className="text-white font-bold text-xl md:text-2xl">
          Sathvik S Kashyap
        </h1>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-slate-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-blue-400 capitalize"
            >
              {link}
            </a>
          ))}

          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block px-6 py-4 text-slate-300 capitalize"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}