import ReactDOM from "react-dom";  //Import here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Home from "./page/Home";
import PPDB from "./page/PPDB";
import Profile from "./page/Profile";
import Tk from "./page/Tk";
import DetailArtikel from "./page/DetailArtikel";
import Sd from "./page/Sd";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/tk" element={<Tk />} />
        <Route path="/detailArtikel" element={<DetailArtikel />} />
        <Route path="/sd" element={<Sd />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);