import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 50px;
  height: 100%;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 480px;
  @media (max-width: 780px) {
    grid-auto-rows: 425px;
  }
`;

const StyledWho = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const StyledColumn = styled(Column)`
  padding: 6em 0 4em 0;
  align-items: center;
  @media (max-width: 780px) {
    padding: 3em 0 1.5em;
  }
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background: #f6f6f6;
  margin: 2em 0;
`;

function Who({ avatar, name, title, description }) {
  return (
    <StyledWho>
      <Avatar />
      <Column width="85%" alignitems="center">
        <Text large>{name}</Text>
        <Text title>{title}</Text>
        <Text>{description}</Text>
      </Column>
    </StyledWho>
  );
}

export default function Team() {
  return (
    <StyledColumn>
      <Subtitle>The Team</Subtitle>
      <Wrapper>
        <Who
          name="Dr. Karim Hanna"
          title="Founder | CEO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
        />
        <Who
          name="Dr. Eddy Gonzalez"
          title="Founder | COO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
        />
        <Who
          name="William Whatley"
          title="Technologist"
          description="William has experience developing applications, as well as leading engineering teams. He has mentored and even served as a judge for a public high school’s program in Florida, where he gave presentations and taught programming, usability, product ideation, UI/UX, and entrepreneurship"
        />
      </Wrapper>
    </StyledColumn>
  );
}
