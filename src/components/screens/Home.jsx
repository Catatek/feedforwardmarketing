import React from "react";
import Splash from "../shared/Splash";
import Navigation from "../shared/Navigation";
import Content from "../shared/Content";
import Benefits from "../shared/Benefits";
import Mocks from "../shared/Mocks";
import Features from "../shared/Features";
import CTA from "../shared/CTA";
import Diagram from "../shared/Diagram";
import Footer from "../shared/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Splash />
      <Content />
      <Benefits />
      <Mocks />
      <Features />

      <CTA />
      <Footer />
    </div>
  );
}
