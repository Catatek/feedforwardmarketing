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
      "Select your program, speciality, and year to find faculty in your department."
  },
  {
    icon: "fal fa-clipboard-list-check",
    title: "To-do list",
    description:
      "Quickly view clinical rotation requirements and what you're assigned for the day."
  },
  {
    icon: "fal fa-handshake-alt",
    title: "Collaborate",
    description:
      "Collaborate with supervisors by requesting instant evaluations during your rotation."
  },
  {
    icon: "fal fa-tachometer-alt",
    title: "Admin Dashboard",
    description:
      "Easily input rotation tasks for various sets of users and see how your organization is performing."
  },
  {
    icon: "fal fa-star",
    title: "Request reviews",
    description:
      "Select the supervisor you want to provide feedback on your task item with the click of a button."
  },
  {
    icon: "fal fa-bell",
    title: "Notifications",
    description:
      "Instantly view invaluable feedback from supervisors when they review your requests and submit."
  }
];

const student = [
  {
    id: "clinical",
    title: "Understand your clinical tasks",
    description: "when you show up for your rotation.",
    icon: "fal fa-bullseye-arrow"
  },
  {
    id: "request",
    title: "Request on-demand reviews",
    description: "by selecting your evaluator on the spot.",
    icon: "fal fa-clipboard-list-check"
  },
  {
    id: "review",
    title: "Review invaluable feedback",
    description: "and understand exactly how to improve.",
    icon: "fal fa-chart-bar"
  }
];

const organization = [
  {
    id: "add",
    title: "Add clinical tasks",
    description: "to any combination of student programs.",
    icon: "fal fa-tasks"
  },
  {
    id: "accountable",
    title: "Hold faculty accountable",
    description: "by viewing task reviews.",
    icon: "fal fa-handshake-alt"
  },
  {
    id: "insight",
    title: "Gain invaluable insight",
    description: "into your organization's health.",
    icon: "fal fa-search"
  }
];

export default function Home() {
  return (
    <div>
      <Navigation />
      <Splash type="home" />
      <Benefits />
      <Mocks
        selected="clinical"
        title="Start everyday organized"
        values={student}
        type="student"
      />
      <Mocks
        selected="add"
        title="Understand your organization"
        values={organization}
        type="organization"
      />
      <Values values={values} title={"Features"} />
      <CTA />
      <Footer />
    </div>
  );
}
