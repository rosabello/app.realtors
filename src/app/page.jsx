import React from "react";
import Navbar from "./components/Navbar";
import Home1 from "./components/home/Home1";
import HomeSection2 from "./components/home/HomeSection2";
import HomeSection4 from "./components/home/HomeSection4";
import Footer from "./components/Footer";


const Page = () => {
  return (
    <div>
      <Navbar />
      <Home1 />   
      <HomeSection4 />
    </div>
  );
};

export default Page;