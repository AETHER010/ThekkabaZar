// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Price from "./components/pricelist/price";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Results from "./components/result/results";
import Bazar from "./components/Bazar/bazar";
import PrivateWorks from "./components/privateWorks/privatework";
import Taxvat from "./components/TaxVat/taxvat";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/results" element={<Results />} />
          <Route path="/bazar" element={<Bazar />} />
          <Route path="/privateWorks" element={<PrivateWorks />} />
          <Route path="/taxvat" element={<Taxvat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
