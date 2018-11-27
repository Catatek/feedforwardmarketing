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
`;

const Icon = styled.img`
  width: 146px;
  height: 40px;
  margin: 0 1em;
`;

export default function CTA() {
  return (
    <Wrapper>
      <Column alignitems="center">
        <Subtitle>Register your organization</Subtitle>
        <Column width="50%" textalign="center" margin="0 0 1em 0">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Text>
        </Column>
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
