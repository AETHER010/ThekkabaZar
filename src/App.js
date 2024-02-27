// AppRouter.js
import React, { useState, useEffect } from "react";
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
import Profile from "./pages/profile/profile";
import Register from "./pages/Register/register";
import ResultDetailpage from "./pages/result/resultDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Loading from "./components/loading/loading";

function App() {
  const [loading, setLoading] = useState(true);
  const access_token = useSelector((state) => state.users.access_token);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={800}
          draggable
        />
        {loading ? (
          <Loading />
        ) : (
          <>
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
              <Route path="/register" element={<Register />} />
              {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
              {access_token ? (
                <Route path="/profile" element={<Profile />} />
              ) : (
                <Route path="/" exact element={<Home />} />
              )}
              <Route
                path="/bazar/productdetails/:mainCategory"
                element={<ProductDetails />}
              />
              <Route path="/resultdetails/:id" element={<ResultDetailpage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
