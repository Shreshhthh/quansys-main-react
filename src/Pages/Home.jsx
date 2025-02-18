import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import ProductImages from "../components/ProductImages";
import SampleVideos from "../components/SampleVideos";
import AIAgentSection from "../components/AIAgentSection";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AIAgentSection />
      <Features />
      <SampleVideos />
      <ProductImages />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
