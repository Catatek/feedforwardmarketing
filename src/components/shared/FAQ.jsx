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
    title: "How do we start?",
    description:
      "Contact us today to learn how you can enroll your organization to start using FeedForward and begin to understand your organization's health better."
  },
  {
    title: "How much does this cost?",
    description:
      "To learn of our pricing, contact us today so we can determine exactly how many usersyour organization has, and to what extent of support is required."
  },
  {
    title: "Do you offer support?",
    description:
      "Yes! We have dedicated customer success specialists charged with guaranteeing that your organization is always covered for technical and customer support."
  },
  {
    title: "What devices does your software support?",
    description:
      "Our mobile and web applicatios are built with the latest, cutting-edge, cross-platform technologies, so in simple-terms, whether your users have Android, or iOS, we have support for it."
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
