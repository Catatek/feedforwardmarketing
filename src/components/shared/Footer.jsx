import React from "react";
import styled from "styled-components";
import { StyledNavLink, Row, Text } from "../../theme/index";
import Logo from "../../assets/logoWhite.svg";

const Wrapper = styled.div`
  height: 125px;
  width: 100%;
  background: #3a485d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0 0 0;
`;

const Image = styled.img`
  width: 225px;
  height: 37px;
  margin-left: 3em;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Row alignitems="center" justifycontent="space-between">
        <Image src={Logo} alt="" />
        <Row alignitems="center">
          <StyledNavLink footer to="/">
            Home
          </StyledNavLink>
          <StyledNavLink footer to="/">
            About
          </StyledNavLink>
          <StyledNavLink footer to="/">
            Resources
          </StyledNavLink>
          <StyledNavLink footer to="/">
            Contact
          </StyledNavLink>
        </Row>
      </Row>
      <Row>
        <Text footer>2018 &copy; Feed Forward</Text>
      </Row>
    </Wrapper>
  );
}
