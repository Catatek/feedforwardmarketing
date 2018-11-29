import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 50px;
  height: 100%;
  margin: 3em auto;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-auto-rows: 325px;
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
`;

function Box({ icon, title, description }) {
  return (
    <StyledBox>
      <Icon className={icon} />
      <Column width="85%" alignitems="center">
        <Text large>{title}</Text>
        <Text>{description}</Text>
      </Column>
    </StyledBox>
  );
}

export default function Values({ values, title }) {
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
    </StyledColumn>
  );
}
