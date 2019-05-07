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
      "Transitioning from periodic teacher-lead progress, FeedForward provides the tools for proactive participation and by giving the learner control of their growth."
  },
  {
    icon: "fal fa-books",
    title: "Education",
    description:
      "Founded by academic physicians who believe education is vital to the success of the medical professional. FeedForward aims to bridge the current gap in the feedback process."
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
        text="We believe learners are more likely to succeed when actively involved in their successes. FeedForward enhances the learner's control of their growth, thereby creating a “can-do” mindset to accomplish the tasks set before them."
        text2="Learners will be able to send requests upon completing tasks to get approval or “sign-off” that they are successful, competent, or entrustable in a certain item. With just a few clicks, both learner and supervisor can interact and record student progress. For the institution, this presents capacity to track a student’s learning and competency completion longitudinally. Ridding the need for subjective memory-based evaluations at the end of a rotation, or rudimentary methods like sign-off sheets, and word of mouth."
      />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
