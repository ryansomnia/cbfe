import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div class="nav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Tentang</a>
  <a href="#contact">SD</a>
  <a href="#contact">TK</a>
  <a href="#about">PPDB</a>
</div>
    </div>
  );
};

export default Header;
