import React from "react";
import styled from "styled-components";
import { Button, Row, StyledNavLink } from "../../theme/index";
import Logo from "../../assets/logo.svg";
import Burger from "./Burger";

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
  width: 200px;
  margin-left: 1.5em;
`;

export default function Navigation({ type, children, ...props }) {
  const mobile = window.matchMedia("(max-width: 1100px)");

  let handleChange = () => {};

  mobile.addListener(handleChange());
  return (
    <Wrapper>
      <Img src={Logo} alt="FeedForward Logo" />
      {mobile.matches && <Burger />}
      {!mobile.matches && (
        <Row alignitems="center">
          <StyledNavLink
            exact
            to="/"
            activeStyle={{
              color: "#00b2aa"
            }}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            exact
            to="/about"
            activeStyle={{
              color: "#00b2aa"
            }}
          >
            About
          </StyledNavLink>
          <StyledNavLink to="/">Resources</StyledNavLink>
          <StyledNavLink to="/">Contact</StyledNavLink>
          <Button nav>Sign In</Button>
        </Row>
      )}
    </Wrapper>
  );
}
