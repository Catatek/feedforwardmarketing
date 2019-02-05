import React from "react";
import styled from "styled-components";
import { Column, Text, Subtitle } from "../../theme/index";
import will from "../../assets/will.png";
import eddy from "../../assets/eddy.png";
import karim from "../../assets/karim.png";

const Wrapper = styled.div`
  width: 95%;
  display: grid;
  grid-gap: 25px;
  height: 100%;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
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

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 2em 0;
`;

function Who({ img, name, title, description }) {
  return (
    <StyledWho>
      <Avatar src={img} />
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
          img={karim}
          description="Karim is from a family of teachers and his experiences stretch from test-prep, to teaching teachers internationally. Currently medical education is his passion and FeedForward pushes his own growth along with his learners in and out of clinical settings. "
        />
        <Who
          name="Dr. Eddy Gonzalez"
          title="Founder | CFO"
          img={eddy}
          description="With over 24 years of experience in academic teaching working with medical, nurse practitioner, pharmacy, physical therapy and undergraduate students, Dr. Gonzalez remains passionate about the about the importance of the education and and training of future healthcare providers."
        />
        <Who
          name="William Whatley"
          title="Technologist"
          img={will}
          description="William has experience developing applications, as well as leading engineering teams. He has mentored and even served as a judge for a public high school’s program in Florida, where he gave presentations and taught programming, usability, product ideation, UI/UX, and entrepreneurship."
        />
      </Wrapper>
    </StyledColumn>
  );
}
