import React from "react";

import Footer from "./Components/layout/Footer";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
