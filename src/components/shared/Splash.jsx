import React from "react";
import styled from "styled-components";
import { Column, Title, Text, Button, Row } from "../../theme/index";
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
  @media (max-width: 780px) {
    height: 100%;
    padding: 1em 0;
    flex-direction: column;
  }
`;

const StyledColumn = styled(Column)`
  width: 40%;
  margin: 0 2em;
  margin-top: 2em;
  text-align: ${props => props.about && "center"};
  @media (max-width: 780px) {
    width: 95%;
    align-items: center;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 800px;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 90%;
  @media (max-width: 780px) {
    width: 95%;
    align-items: center;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 500px) {
    display: none;
  }
`;

export default function Splash({ type }) {
  return (
    <Wrapper
      background={
        type === "home" ? "#fff" : "linear-gradient(to right, #59D2FE, #44E5E7)"
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
            <StyledTextColumn>
              <Text header>
                FeedForward creates a seamless workflow for learners to request
                on-demand evaluations from their supervisors. In turn, this
                provides invaluable data metrics to organizations on how their
                programs, students, and supervisors are performing.
              </Text>
              <StyledRow>
                <Button primary className="drift-open-chat">
                  Get started
                </Button>
              </StyledRow>
            </StyledTextColumn>
          </StyledColumn>
        </React.Fragment>
      )}
      {type === "about" && (
        <StyledColumn about={type === "about"}>
          <Title white>About us</Title>
          <Text white>
            Founded by a collective of medical professionals and engineers,
            FeedForward is rooted in providing value and solutions to medical
            organizations.
          </Text>
        </StyledColumn>
      )}
    </Wrapper>
  );
}
