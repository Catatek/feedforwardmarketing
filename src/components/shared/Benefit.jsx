import React from "react";
import styled from "styled-components";
import { Column, Text, Button } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 625px;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    flex-direction: ${props => (props.primary ? "column-reverse" : "column")};
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 100%;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
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

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    align-items: center;
  }
`;

const Img = styled.img`
  width: ${props => props.width};
  @media (max-width: 780px) {
    width: 90%;
  }
`;

export default function Benefit({ title, description, img, type, width }) {
  return (
    <Wrapper primary={type === "primary"}>
      {type === "primary" && (
        <React.Fragment>
          <StyledColumn>
            <StyledTextColumn>
              <Text large>{title}</Text>
              <Text>{description}</Text>
              <Button primary>Learn more</Button>
            </StyledTextColumn>
          </StyledColumn>
          <StyledColumn>
            <Img width={width} src={img} />
          </StyledColumn>
        </React.Fragment>
      )}
      {type === "secondary" && (
        <React.Fragment>
          <StyledColumn>
            <Img width={width} src={img} />
          </StyledColumn>
          <StyledColumn>
            <StyledTextColumn>
              <Text large>{title}</Text>
              <Text>{description}</Text>
              <Button primary>Learn more</Button>
            </StyledTextColumn>
          </StyledColumn>
        </React.Fragment>
      )}
    </Wrapper>
  );
}
