import React from "react";
import styled from "styled-components";
import diagram from "../../assets/diagram.png";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const Image = styled.img``;

export default function Diagram() {
  return (
    <Wrapper>
      <Image src={diagram} />
    </Wrapper>
  );
}
