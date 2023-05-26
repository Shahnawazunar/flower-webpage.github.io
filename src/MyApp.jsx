import React from "react";
import { Routes, Route } from "react-router-dom";

import "./MyApp.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import About from "./components/About";
import Contect from "./components/Contect";
import Products from "./components/Products";
import Rose from "./components/Products/Rose";
import Leli from "./components/Products/Leli";
import Jar from "./components/Products/Jar";
import Main from "./components/Main";


function MyApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/products" element={<Products />}>
          <Route path="rose" element={<Rose />} />
          <Route path="leli" element={<Leli />} />
          <Route path="jar" element={<Jar />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyApp;
