import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 780px) {
    height: 100%;
    margin: 3em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 55%
  text-align: center;
  align-items: center;
  @media (max-width: 780px) {
   width: 95%;
  }
`;

export default function Content() {
  return (
    <Wrapper>
      <StyledColumn>
        <Subtitle>Streamline medical evaluations</Subtitle>
        <Text>
          Provide an understanding of exactly what's required by medical
          students during clinical rotations, and allow them to instantly
          request evaluations by their peers and supervisors. Anytime, anywhere,
          with any task.
        </Text>
      </StyledColumn>
    </Wrapper>
  );
}
