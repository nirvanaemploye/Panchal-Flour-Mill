import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import WhyUs from "./Components/WhyUs/WhyUs";
import Gallery from "./Components/Gallery/Gallery";
import Location from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-800 scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <WhyUs />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;
