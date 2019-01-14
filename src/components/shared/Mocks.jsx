import React, { Component } from "react";
import styled from "styled-components";
import Benefit from "./Benefit";
import Browser from "../../assets/browser.png";
import Home from "../../assets/Home.png";
import Evaluator from "../../assets/Evaluator_Comp.png";
import { Subtitle, Text, Column, Row } from "../../theme/index";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6em 0 4em 0;
`;

const Grid = styled.div`
  width: 75%;
  display: grid;
  grid-gap: 45px;
  margin: 3em auto 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  grid-auto-rows: 90px;
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f5f7;
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
`;

const Icon = styled.i`
  font-size: 3em;
  transition: 750ms;
  color: ${props => (props.active ? "#00b2aa" : "#BFD1DA")};
`;

const boxes = [
  {
    id: "effective",
    title: "Effective",

    icon: "fal fa-bullseye-arrow"
  },
  // {
  //   id: "efficient",
  //   title: "Efficient",

  //   icon: "fal fa-rabbit-fast"
  // },
  {
    id: "evaluations",
    title: "Evaluations",

    icon: "fal fa-clipboard-list-check"
  },
  // {
  //   id: "accountability",
  //   title: "Accountability",

  //   icon: "fal fa-fingerprint"
  // },
  {
    id: "analytical",
    title: "Analytical",

    icon: "fal fa-chart-bar"
  }
];

function Box({ icon, id, selected, title, description, handleClick }) {
  return (
    <StyledBox id={id} onClick={() => handleClick(id)}>
      <Icon className={icon} active={id === selected} />
      <Text boxtitle>{title}</Text>
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
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
        <Column alignitems="center" textalign="center">
          <Subtitle>Everything you need</Subtitle>
        </Column>

        {mobile.matches ? (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Benefit
                img={Home}
                width="40%"
                type="primary"
                title="Effective"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Benefit
                img={Evaluator}
                width="40%"
                type="primary"
                title="Evaluations"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Benefit
                img={Browser}
                width="90%"
                type="primary"
                title="To Do List"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              {/* <Benefit
                img={Browser}
                type="primary"
                title="To Do List"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <Benefit
                img={Browser}
                type="primary"
                title="To Do List"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              /> */}
            </Slider>
          </div>
        ) : (
          <React.Fragment>
            <Grid>
              {boxes &&
                boxes.map((key, index) => {
                  return (
                    <Box
                      key={index}
                      id={key.id}
                      title={key.title}
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
                  img={Home}
                  width="40%"
                  type="primary"
                  title="Effective"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}

              {selected === "evaluations" && (
                <Benefit
                  img={Evaluator}
                  width="40%"
                  type="primary"
                  title="Evaluations"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}

              {selected === "analytical" && (
                <Benefit
                  img={Browser}
                  width="90%"
                  type="primary"
                  title="To Do List"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              )}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
