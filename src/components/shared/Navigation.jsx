import React from "react";
import styled from "styled-components";
import { Button, Row } from "../../theme/index";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

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

const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  color: #3a485d;
  font-weight: 600;
  margin-right: 3em;
  @media (max-width: 1100px) {
    font-size: 1.2em;
  }
`;

export default function Navigation() {
  return (
    <Wrapper>
      <Img src={Logo} alt="FeedForward Logo" />
      <Row alignitems="center">
        <StyledNavLink
          to="/"
          activeStyle={{
            color: "#00b2aa"
          }}
        >
          Home
        </StyledNavLink>
        <StyledNavLink to="/">About</StyledNavLink>
        <StyledNavLink to="/">Resources</StyledNavLink>
        <StyledNavLink to="/">Contact</StyledNavLink>
        <Button nav>Sign In</Button>
      </Row>
    </Wrapper>
  );
}
