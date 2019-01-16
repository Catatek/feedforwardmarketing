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
      "Our name stems from pushing you forth with your feed. We're rooted in belief that humans make change, and that's exactly what our mission is."
  },
  {
    icon: "fal fa-books",
    title: "Education",
    description:
      "Founded by academic doctors, we believe education is vital to the success of medical professionals. We aim to bridge the current task gap with our software."
  },
  {
    icon: "fal fa-award",
    title: "Excellence",
    description:
      "Excellence to us means clarity, understanding, and aligning your profession with your personal moral compass. We aim to connect these dots by providing clarity."
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
