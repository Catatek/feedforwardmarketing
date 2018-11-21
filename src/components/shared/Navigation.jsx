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
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
