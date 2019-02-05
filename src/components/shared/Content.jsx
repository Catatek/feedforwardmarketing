import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #f1f5f7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height};
  margin: 3em 0 4em 0;
  padding: 1em;
  @media (max-width: 780px) {
    height: 100%;
    padding: 2em 0;
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

export default function Content({ title, text, text2, type }) {
  return (
    <Wrapper height={type === "about" ? "450px" : "350px"}>
      <StyledColumn>
        <Subtitle>{title}</Subtitle>
        <Text>{text}</Text>
        {text2 && <Text>{text2}</Text>}
      </StyledColumn>
    </Wrapper>
  );
}
