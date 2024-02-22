// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Price from "./pages/pricelist/price";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Results from "./pages/result/results";
import Bazar from "./pages/Bazar/bazar";
import ProductDetails from "./pages/Bazar/productDetails";
import PrivateWorks from "./pages/privateWorks/privatework";
import Taxvat from "./pages/TaxVat/taxvat";
import Login from "./pages/login/login";
import DetailPage from "./pages/home/detailpage";
import AboutUs from "./pages/AboutUs/aboutUs";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={800}
          draggable
        />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/results" element={<Results />} />
          <Route path="/bazar" element={<Bazar />} />
          <Route path="/privateWorks" element={<PrivateWorks />} />
          <Route path="/taxvat" element={<Taxvat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/bazar/productdetails/:mainCategory"
            element={<ProductDetails />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
