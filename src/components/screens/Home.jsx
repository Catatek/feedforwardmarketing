import React from "react";
import Splash from "../shared/Splash";
import Navigation from "../shared/Navigation";
import Content from "../shared/Content";
import Benefits from "../shared/Benefits";
import Mocks from "../shared/Mocks";
import Values from "../shared/Values";
import CTA from "../shared/CTA";
import Diagram from "../shared/Diagram";
import Footer from "../shared/Footer";

const values = [
  {
    icon: "fal fa-user-md",
    title: "Select your speciality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-clipboard-list-check",
    title: "To-do list",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-handshake-alt",
    title: "Collaborate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-tachometer-alt",
    title: "Admin Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-star",
    title: "Request reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-bell",
    title: "Notifications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  }
];

export default function Home() {
  return (
    <div>
      <Navigation />
      <Splash type="home" />
      <Content />
      <Benefits />
      <Mocks />
      <Values values={values} title={"Features"} />
      <CTA />
      <Footer />
    </div>
  );
}
