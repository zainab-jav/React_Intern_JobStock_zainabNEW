import React from "react";
import Footer from "../sections/Footer";
import RandomJobs from "../sections/RandomJobs";
import HowitWorks from "../sections/HowitWoks";
import Header from "../sections/Header"
import OurStories from "../sections/OurStories";
import DownloadApp from "../sections/AppAdvertisment"
const Home = () => {
  return (
    <>
      <Header />
      <RandomJobs />
      <HowitWorks />
      <OurStories />
      <DownloadApp />
      <Footer />
    </>
  );
};
export default Home;
