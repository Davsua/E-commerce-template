import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Navbar, SearchFeed, ProductDetail } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
