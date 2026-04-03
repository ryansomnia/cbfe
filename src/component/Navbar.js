import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profil", path: "/profile" },
    { name: "SD", path: "/sd" },
    { name: "TK", path: "/tk" },
    { name: "PPDB", path: "/ppdb" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 md:gap-3">
          <img src="/logocb.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="font-bold text-sm md:text-lg tracking-wide text-gray-800">
            CERDAS BANGSA
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-gray-700 text-sm md:text-base font-medium transition duration-300 hover:text-blue-600 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/ppdb"
            className="px-4 md:px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600  text-sm md:text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            Daftar
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </button>
      </div>

    {/* Mobile Menu */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Header Mobile (Back Button) */}
  <div className="flex items-center justify-between px-4 py-4 border-b">
    <span className="font-semibold text-gray-700">Menu</span>
    
    <button
      onClick={() => setMenuOpen(false)}
      className="text-2xl text-gray-800"
    >
      <AiOutlineClose />
    </button>
  </div>

  {/* Menu Content */}
  <div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg">
    {navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setMenuOpen(false)}
        className="text-gray-800 text-xl hover:text-blue-600 transition"
      >
        {item.name}
      </NavLink>
    ))}

    <NavLink
      to="/ppdb"
      onClick={() => setMenuOpen(false)}
      className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
    >
      Daftar Sekarang
    </NavLink>
  </div>
</div>
</header>
  );
}
