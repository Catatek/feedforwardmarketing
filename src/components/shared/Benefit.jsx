import React from "react";
import styled from "styled-components";
import { Column, Text, Button } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  width: 90%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 800px) {
    width: 100%;
    padding: 4em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: 70%;
`;

export default function Benefit({ title, description, img, bullets, type }) {
  return (
    <Wrapper>
      {type === "primary" && (
        <React.Fragment>
          <StyledColumn>
            <StyledTextColumn>
              <Text large>{title}</Text>
              <Text>{description}</Text>
              <Column margin="0 0 1em 0">
                {bullets &&
                  bullets.map((key, index) => {
                    return (
                      <Text bullets key={index}>
                        {key}
                      </Text>
                    );
                  })}
              </Column>
              <Button primary>Learn more</Button>
            </StyledTextColumn>
          </StyledColumn>
          <StyledColumn>
            <Img src={img} />
          </StyledColumn>
        </React.Fragment>
      )}
      {type === "secondary" && (
        <React.Fragment>
          <StyledColumn>
            <Img src={img} />
          </StyledColumn>
          <StyledColumn>
            <StyledTextColumn>
              <Text large>{title}</Text>
              <Text>{description}</Text>
              <Column margin="0 0 1em 0">
                {bullets &&
                  bullets.map((key, index) => {
                    return (
                      <Text bullets key={index}>
                        {key}
                      </Text>
                    );
                  })}
              </Column>
              <Button primary>Learn more</Button>
            </StyledTextColumn>
          </StyledColumn>
        </React.Fragment>
      )}
    </Wrapper>
  );
}