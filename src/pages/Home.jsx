import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";

function Home(props) {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}

export default Home;
