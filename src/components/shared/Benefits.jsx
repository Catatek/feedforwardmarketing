import React from "react";
import styled from "styled-components";
import Benefit from "./Benefit";
import mockOne from "../../assets/mockOne.png";
import mockTwo from "../../assets/mockTwo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Benefits() {
  return (
    <Wrapper>
      <Benefit
        type="primary"
        title="To Do List"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Benefit
        type="secondary"
        title="To Do List"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </Wrapper>
  );
}
