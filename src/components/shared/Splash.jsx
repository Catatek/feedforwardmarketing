import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Button } from "../../theme/index";
import splashImg from "../../assets/splash.svg";

const Wrapper = styled.div`
  height: 805px;
  background: ${props => props.background};
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  bottom: 0;
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
  width: 100%;
`;

export default function Splash({ type }) {
  return (
    <Wrapper
      background={
        type === "home"
          ? "#f2f5f7"
          : "linear-gradient(to right, #59D2FE, #44E5E7)"
      }
    >
      {type === "home" && (
        <React.Fragment>
          <StyledColumn>
            <Img src={splashImg} alt="Splash Img" />
          </StyledColumn>
          <StyledColumn>
            <Text large>
              FeedForward, a teaching tool for medical education
            </Text>
            <Title>Effective, Efficient Evaluations</Title>
            <div style={{ width: "90%" }}>
              <Text header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Button primary>Get started</Button>
            </div>
          </StyledColumn>
        </React.Fragment>
      )}
      {type === "about" && (
        <Column alignitems="center" textalign="center" width="60%">
          <Title white>Feed Forward was founded upon Accountability</Title>
          <Text white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Column>
      )}
    </Wrapper>
  );
}
