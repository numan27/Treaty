import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact";
import Features from "./Components/FeaturesSection/FeaturesSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import React from "react";
import ServicesSection from "./Components/ServicesSection";
import Slider from "./Components/Slider";


function Index() {
  return(
    <>
    <Header/>
    <Slider />
    <Features />
    <ServicesSection/>
    <Contact/>
    <Footer/>
    </>
  ) 
}

export default Index;
