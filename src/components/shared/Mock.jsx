import React from "react";
import styled from "styled-components";
import { Column, Text, Button } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 2em auto;
  @media (max-width: 780px) {
    flex-direction: ${props => (props.primary ? "column-reverse" : "column")};
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 100%;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 100%;
    align-items: center;
    padding: 0;
    margin: 0.75em 0;
  }
`;

const Img = styled.img`
  height: ${props => props.height};
`;

export default function Mock({ img, type, height }) {
  return (
    <Wrapper primary={type === "primary"}>
      <StyledColumn>
        <Img className="mockImg" height={height} src={img} />
      </StyledColumn>
    </Wrapper>
  );
}
