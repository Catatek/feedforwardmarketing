import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 25px;
  height: 100%;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 295px;
  @media (max-width: 780px) {
    width: 100%;
    grid-auto-rows: 275px;
  }
`;

const Icon = styled.i`
  font-size: 4em;
  margin: 0.5em 0;
  color: #00b2aa;
`;

const StyledBox = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const StyledColumn = styled(Column)`
  padding: 6em 0 4em 0;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    padding: 3em 0 1.5em;
  }
`;

const StyledBoxColumn = styled(Column)`
  width: 85%;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

function Box({ icon, title, description }) {
  return (
    <StyledBox>
      <Icon className={icon} />
      <StyledBoxColumn>
        <Text large>{title}</Text>
        <Text>{description}</Text>
      </StyledBoxColumn>
    </StyledBox>
  );
}

export default function Values({ values, title, text }) {
  return (
    <StyledColumn>
      <Subtitle>{title}</Subtitle>
      <Wrapper>
        {values &&
          values.map((key, index) => {
            return (
              <Box
                key={index}
                icon={key.icon}
                title={key.title}
                description={key.description}
              />
            );
          })}
      </Wrapper>
      <Text>{text}</Text>
    </StyledColumn>
  );
}
