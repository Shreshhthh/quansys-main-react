import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import TableImage from "../components/TableImage";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ProductImages from "../components/ProductImages";
import SampleVideos from "../components/SampleVideos";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TableImage />
      <SampleVideos />
      <ProductImages />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
