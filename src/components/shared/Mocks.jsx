import React, { Component } from "react";
import styled from "styled-components";
import Benefit from "./Benefit";
import Browser from "../../assets/browser.png";
import { Subtitle, Text, Column, Row } from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f5f7;
  padding: 6em 0 4em 0;
`;

const Grid = styled.div`
  width: 75%;
  display: grid;
  grid-gap: 45px;
  margin: 3em auto 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  grid-auto-rows: 175px;
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 150px);
    grid-auto-rows: 45px;
    width: 95%;
    grid-gap: 35px 10px;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0.5em;
  text-align: center;
  margin: 0 1.5em;
  border-radius: 3px;
  cursor: pointer;
  transition: 750ms;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 400px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0.5em 0;
  }
`;

const Icon = styled.i`
  font-size: 3em;
  transition: 750ms;
  color: ${props => (props.active ? "#00b2aa" : "#BFD1DA")};
  @media (max-width: 400px) {
    font-size: 1.75em;
  }
`;

const boxes = [
  {
    id: "effective",
    title: "Effective",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-bullseye-arrow"
  },
  {
    id: "efficient",
    title: "Efficient",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-rabbit-fast"
  },
  {
    id: "evaluations",
    title: "Evaluations",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-clipboard-list-check"
  },
  {
    id: "accountability",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint"
  },
  {
    id: "analytical",
    title: "Analytical",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-chart-bar"
  }
];

function Box({ icon, id, selected, title, description, handleClick }) {
  return (
    <StyledBox id={id} onClick={() => handleClick(id)}>
      <Icon className={icon} active={id === selected} />
      <Text boxtitle>{title}</Text>
      <Text boxdesc>{description}</Text>
    </StyledBox>
  );
}

export default class Mocks extends Component {
  state = {
    selected: "effective"
  };

  handleClick = id => {
    this.setState(() => {
      return {
        selected: id
      };
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <Wrapper>
        <Column alignitems="center" textalign="center">
          <Subtitle>Everything you need</Subtitle>
        </Column>
        <Grid>
          {boxes &&
            boxes.map((key, index) => {
              return (
                <Box
                  key={index}
                  id={key.id}
                  title={key.title}
                  description={key.description}
                  icon={key.icon}
                  handleClick={this.handleClick}
                  selected={selected}
                />
              );
            })}
        </Grid>
        <Row>
          {selected === "effective" && (
            <Benefit
              img={Browser}
              type="primary"
              title="Effective"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}
          {selected === "efficient" && (
            <Benefit
              img={Browser}
              type="primary"
              title="Efficient"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}
          {selected === "evaluations" && (
            <Benefit
              img={Browser}
              type="primary"
              title="Evaluations"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}
          {selected === "accountability" && (
            <Benefit
              img={Browser}
              type="primary"
              title="To Do List"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}
          {selected === "analytical" && (
            <Benefit
              img={Browser}
              type="primary"
              title="To Do List"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          )}
        </Row>
      </Wrapper>
    );
  }
}
