import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import PPDB from "./page/PPDB";
import Profile from "./page/Profile";
import Tk from "./page/Tk";
import Sd from "./page/Sd";
import DetailArtikel from "./page/DetailArtikel";

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-slate-800 overflow-x-hidden">
        <NavBar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ppdb" element={<PPDB />} />
            <Route path="/tk" element={<Tk />} />
            <Route path="/sd" element={<Sd />} />
            <Route
              path="/detailArtikel"
              element={<DetailArtikel />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}