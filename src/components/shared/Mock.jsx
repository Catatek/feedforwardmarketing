import React from "react";
import styled from "styled-components";
import { Column } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 2em auto;
  @media (max-width: 780px) {
    flex-direction: ${props => (props.primary ? "column-reverse" : "column")};
    align-items: center;
    height: 100%;
  }
`;

const StyledColumn = styled(Column)`
  width: 90%;
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

const MobileImg = styled.img`
  height: 500px;
  @media (max-width: 500px) {
    height: 300px;
  }
`;

const DesktopImg = styled.img`
  height: 400px;
  margin-top: 2em;
  @media (max-width: 500px) {
    height: 200px;
  }
`;

export default function Mock({ img, type }) {
  return (
    <Wrapper primary={type === "primary"}>
      <StyledColumn>
        {type === "mobile" && <MobileImg className="mockImg" src={img} />}
        {type === "desktop" && <DesktopImg className="mockImg" src={img} />}
      </StyledColumn>
    </Wrapper>
  );
}
