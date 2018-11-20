import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Subtitle } from "../../theme/index";
import splashImg from "../../assets/splash.svg";

const Wrapper = styled.div`
  min-height: 90vh;
  height: 100%;
  background: #fff;
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    height: 100%;
  }
`;

const StyledColumn = styled(Column)`
  width: 40%;
  margin: 0 2em;
  margin-top: 2em;
  @media (max-width: 1200px) {
    width: 90%;
    margin: 5em 0;
  }
`;

const Img = styled.img`
  width: 90%;
`;

export default function Splash() {
  return (
    <Wrapper>
      <StyledColumn>
        <Img src={splashImg} alt="Splash Img" />
      </StyledColumn>
      <StyledColumn>
        <Subtitle>FeedForward, a teaching tool for medical education</Subtitle>
        <Title>Effective, Efficient Evaluations</Title>
        <div style={{ width: "90%" }}>
          <Text header>
            Strengthen Your Community. Create Unlimited Opportunity. Connect-IT
            360 is a non-profit teaching our youth the essential building blocks
            to being successful in life. We bridge the gap between our youth and
            the business world to guide them through disruption and
            transformation.
          </Text>
        </div>
      </StyledColumn>
    </Wrapper>
  );
}
