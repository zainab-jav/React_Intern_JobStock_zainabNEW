import React from "react";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import HowitWorks from "../sections/HowitWoks"
import HeroBanner from "../sections/FreelancingBanner"
import BrandSlider from "../components/BrandSlider";
import CallToAction from "../sections/TwoColumn";
const Freelancing = ()=> {
// FreelancerData[0].portfolio.map(val=>console.log(val) )
  return(
    <>
    <Navbar />
    <HeroBanner />
    <BrandSlider/>
    <HowitWorks />
    <CallToAction />
    <Footer />
    </>
  )
}
export default Freelancing