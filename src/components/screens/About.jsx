import React from "react";
import Navigation from "../shared/Navigation";
import Splash from "../shared/Splash";
import Footer from "../shared/Footer";
import Values from "../shared/Values";
import Team from "../shared/Team";
import FAQ from "../shared/FAQ";
import Content from "../shared/Content";

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
      <Content
        type="about"
        title="How it works"
        text="We believe that students are more likely to succeed when actively involved in their personal successes. Our interface puts the student more in control of their growth, and giving them the “can-do” mindset to accomplish the tasks set before them from the start. Students will be able to send requests upon completing tasks to get approval or “sign-off” that they are successful, competent, or entrustable in a certain item. With just a few clicks, both learner and supervisor can interact and record student progress. For the institution, this presents capacity to track a student’s learning and competency completion longitudinally. Ridding the need for subjective memory-based evaluations at the end of a rotation, or rudimentary methods like sign-off sheets, and word of mouth."
      />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
