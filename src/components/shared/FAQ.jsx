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
  @media (max-width: 400px) {
    grid-template-columns: 300px;
    grid-auto-rows: 185px;
    width: 95%;
    grid-gap: 35px 10px;
  }
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
  @media (max-width: 780px) {
    padding: 3em 0 1.5em;
    text-align: center;
  }
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
