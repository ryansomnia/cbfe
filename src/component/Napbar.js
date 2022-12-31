import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  console.log(screenWidth, 'screenWidth');
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">

        <NavLink to="/" className="header__content__logo  flex">
          <img className="w-12 h-12" src="logocb.png" alt="A group of People" />
          <h5 className="judul-title">CERDAS BANGSA</h5>
          {/* CERDAS BANGSA */}
        </NavLink >
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >

          {screenWidth > 600 ? 
            <ul>
              <li>
                <NavLink to="/" onClick={menuToggleHandler}>Home</NavLink >
              </li>
              <li>
                <NavLink to="/profile" onClick={menuToggleHandler}>Profil</NavLink >
              </li>
              <li>
                <NavLink to="/sd" onClick={menuToggleHandler}>SD</NavLink >
              </li>
              <li>
                <NavLink to="/tk" onClick={menuToggleHandler}>TK</NavLink >
              </li>
              <li>
                <NavLink to="/ppdb" onClick={menuToggleHandler}>PPDB</NavLink >
              </li>
            </ul>
          : 
          <ul>
              <li>
                <NavLink to="/" >Home</NavLink >
              </li>
              <li>
                <NavLink to="/profile">Profil</NavLink >
              </li>
              <li>
                <NavLink to="/sd">SD</NavLink >
              </li>
              <li>
                <NavLink to="/tk">TK</NavLink >
              </li>
              <li>
                <NavLink to="/ppdb">PPDB</NavLink >
              </li>
            </ul>}
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>

  )
}
