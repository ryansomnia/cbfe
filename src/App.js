import ReactDOM from "react-dom";  //Import here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Home from "./page/Home" ;

export default function App() {
 
   
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </BrowserRouter>
      );
     
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);