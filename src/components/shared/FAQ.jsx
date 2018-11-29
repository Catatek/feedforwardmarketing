import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 80px;
  height: 100%;
  margin: 5em auto;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-auto-rows: 220px;
`;

const Icon = styled.i`
  font-size: 4em;
  margin: 0.5em 0;
  color: #00b2aa;
`;

const StyledBox = styled(Column)`
  width: 100%;
  height: 100%;
  padding: 0.5em;
  border: 1px solid #c2d1d9;
  border-left: 10px solid #546887;
  border-radius: 3px;
`;

const StyledColumn = styled(Column)`
  padding: 6em 0 4em 0;
  align-items: center;
`;

const faq = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  }
];

function Box({ title, description }) {
  return (
    <StyledBox>
      <Text large>{title}</Text>
      <Text>{description}</Text>
    </StyledBox>
  );
}

export default function FAQ() {
  return (
    <StyledColumn>
      <Subtitle>Frequently Asked Questions</Subtitle>
      <Wrapper>
        {faq &&
          faq.map((key, index) => {
            return (
              <Box
                key={index}
                title={key.title}
                description={key.description}
              />
            );
          })}
      </Wrapper>
    </StyledColumn>
  );
}
