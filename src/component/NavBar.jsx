import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const menus = [
    { name: "Home", path: "/" },
    { name: "Profil", path: "/profile" },
    { name: "TK", path: "/tk" },
    { name: "SD", path: "/sd" },
    { name: "PPDB", path: "/ppdb" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scroll
            ? "bg-white/70 backdrop-blur-2xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src="/logocb.png"
                alt="Logo Sekolah Cerdas Bangsa"
                className="w-11 h-11 object-contain"
              />

              <div className="leading-none">
                <h1
                  className={`font-extrabold text-lg tracking-wide transition ${
                    scroll ? "text-slate-800" : "text-white"
                  }`}
                >
                  CERDAS BANGSA
                </h1>

                <p
                  className={`text-xs transition ${
                    scroll ? "text-slate-500" : "text-slate-200"
                  }`}
                >
                  Christian School
                </p>
              </div>
            </NavLink>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-10">
              {menus.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-sky-400"
                        : scroll
                        ? "text-slate-700 hover:text-sky-500"
                        : "text-white hover:text-sky-300"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-sky-400 rounded-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <NavLink
                to="/ppdb"
                className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Daftar Sekarang
              </NavLink>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-3xl transition ${
                scroll ? "text-slate-800" : "text-white"
              }`}
            >
              {open ? <AiOutlineClose /> : <BiMenuAltRight />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* MENU PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* TOP */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
            <div>
              <h2 className="font-bold text-slate-800">
                Menu
              </h2>

              <p className="text-sm text-slate-500">
                Sekolah Cerdas Bangsa
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-slate-700"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* MENU */}
          <div className="flex flex-col px-6 py-8">
            {menus.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `py-4 text-lg font-semibold border-b border-slate-100 transition ${
                    isActive
                      ? "text-sky-500"
                      : "text-slate-700 hover:text-sky-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* CTA */}
            <NavLink
              to="/ppdb"
              className="mt-8 text-center px-6 py-4 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-xl transition duration-300"
            >
              Daftar Sekarang
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}