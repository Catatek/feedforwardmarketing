import React from "react";
import styled from "styled-components";
import Mock from "../../assets/ctamock.png";
import { Column, Subtitle, Text, Row } from "../../theme";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 550px;
  background: #f1f5f7;
  padding: 6em 0 4em 0;
  position: relative;
`;

const Image = styled.img`
  width: 400px;
  height: 354px;
  position: absolute;
  bottom: 0;
  @media (max-width: 780px) {
    width: 300px;
    height: 265px;
  }
`;

const Icon = styled.img`
  width: 146px;
  height: 40px;
  margin: 0 1em;
  @media (max-width: 780px) {
    width: 115px;
    height: 31px;
  }
`;

const StyledColumn = styled(Column)`
  width: 50%;
  text-align: center;
  margin: 0 0 1em 0;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0 0 2em 0;
  }
`;

export default function CTA() {
  return (
    <Wrapper>
      <Column alignitems="center" textalign="center">
        <Subtitle>Register your organization</Subtitle>
        <StyledColumn>
          <Text>
            Contact us today to better understand how well your organization and
            learners are progressing.
          </Text>
        </StyledColumn>
        <Row>
          <Icon src={Apple} alt="" />
          <Icon src={Google} alt="" />
        </Row>
      </Column>
      <Row justifycontent="center">
        <Image src={Mock} alt="" />
      </Row>
    </Wrapper>
  );
}
