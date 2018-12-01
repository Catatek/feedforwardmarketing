import React from "react";
import Navigation from "../shared/Navigation";
import Splash from "../shared/Splash";
import Footer from "../shared/Footer";
import Values from "../shared/Values";
import Team from "../shared/Team";
import FAQ from "../shared/FAQ";

const values = [
  {
    icon: "fal fa-heart",
    title: "Impact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-books",
    title: "Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-award",
    title: "Excellence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  }
];

export default function About() {
  return (
    <div>
      <Navigation />
      <Splash type="about" />
      <Values values={values} title="Our Values" />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
