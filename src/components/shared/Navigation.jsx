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
  z-index: 100000;
`;

export const A = styled.a`
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  color: #3a485d;
  font-weight: 600;
  margin-right: 3em;
  cursor: pointer;
  @media (max-width: 1100px) {
    font-size: 14px;
    margin: 0 0.5em;
  }
`;

const Img = styled.img`
  width: 200px;
  margin-left: 1.5em;
`;

export default function Navigation({ type, children }) {
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

          <A className="drift-open-chat">Contact</A>
          <Button nav>Sign In</Button>
        </Row>
      )}
    </Wrapper>
  );
}
