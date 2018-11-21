import React from "react";
import Splash from "../shared/Splash";
import Navigation from "../shared/Navigation";
import Content from "../shared/Content";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Splash />
      <Content />
    </div>
  );
}
