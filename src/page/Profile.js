import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Profile() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <h1>Profile</h1>
      </div>
      <Footer/>
    </div>
  );
}
