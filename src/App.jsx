import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TableImage from "./components/TableImage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ProductImages from "./components/ProductImages";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-gray-200 overflow-x-hidden">
      <Header />
      <HeroSection />
      <TableImage />
      <ProductImages />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
