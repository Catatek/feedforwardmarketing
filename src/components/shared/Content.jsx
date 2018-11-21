import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  min-height: 500px;
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
        <Subtitle>The future creators & leaders</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </StyledColumn>
    </Wrapper>
  );
}
