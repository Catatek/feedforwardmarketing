import React from "react";
import styled from "styled-components";
import { StyledNavLink, Row, Text } from "../../theme/index";
import Logo from "../../assets/logoWhite.svg";

const Wrapper = styled.div`
  height: 125px;
  width: 100%;
  background: #546887;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0 0 0;
  @media (max-width: 780px) {
    height: 100%;
    padding: 2em 0;
  }
`;

const Image = styled.img`
  width: 225px;
  height: 37px;
  margin-left: 3em;
  @media (max-width: 780px) {
    margin: 1em 0 2em 0;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 780px) {
    text-align: center;
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <StyledRow>
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
      </StyledRow>
      <Row>
        <Text footer>
          2018 &copy; Feed Forward | Made with &hearts; in Tampa, FL
        </Text>
      </Row>
    </Wrapper>
  );
}
