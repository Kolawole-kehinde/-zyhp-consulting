import React from "react";
import Footer from "./Components/layout/Footer";
import Navbar from "./Components/layout/Navbar";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import AllServices from "./Pages/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/services" element={<AllServices />} />
      </Routes>

      <Footer />
    
    </div>
  );
};

export default App;
