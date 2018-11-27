import React from "react";
import Splash from "../shared/Splash";
import Navigation from "../shared/Navigation";
import Content from "../shared/Content";
import Benefits from "../shared/Benefits";
import Mocks from "../shared/Mocks";
import Features from "../shared/Features";
import CTA from "../shared/CTA";

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
    </div>
  );
}
