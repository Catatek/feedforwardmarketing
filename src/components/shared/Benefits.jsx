import React from "react";
import styled from "styled-components";
import Benefit from "./Benefit";
import illustration1 from "../../assets/illustration1.jpg";
import illustration2 from "../../assets/illustration2.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Benefits() {
  return (
    <Wrapper>
      <Benefit
        img={illustration1}
        type="primary"
        title="To Do List"
        width="75%"
        description="Quickly view, understand, and take action of your rotation requirements as a medical student in the form of an easy-to-navigate to-do list."
      />
      <Benefit
        img={illustration2}
        type="secondary"
        title="Request Feedback"
        width="75%"
        description="Request an evaluation with the click of a button, by selecting the supervisor in your department that you would like feedback from."
      />
    </Wrapper>
  );
}
