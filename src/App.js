import ReactDOM from "react-dom";  //Import here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Home from "./page/Home" ;
import PPDB from "./page/PPDB";
import Profile from "./page/Profile";

export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/ppdb" element={<PPDB />}/>

          </Routes>
        </BrowserRouter>
      );
     
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);