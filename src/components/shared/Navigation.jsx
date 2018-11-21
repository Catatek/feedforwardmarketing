import React from "react";
import styled from "styled-components";
import { Button } from "../../theme/index";
import Logo from "../../assets/logo.svg";

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
`;

const Img = styled.img`
  height: 85px;
  margin-left: 1.5em;
`;

export default function Navigation() {
  return (
    <Wrapper>
      <Img src={Logo} alt="FeedForward Logo" />
      <Button nav>Sign In</Button>
    </Wrapper>
  );
}
