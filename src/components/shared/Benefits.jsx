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
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Benefit
        img={illustration2}
        type="secondary"
        title="To Do List"
        width="75%"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Wrapper>
  );
}
