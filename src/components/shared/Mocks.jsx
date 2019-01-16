import React, { Component } from "react";
import styled from "styled-components";
import Benefit from "./Benefit";
import Mock from "./Mock";
import clinical from "../../assets/clinical.png";
import request from "../../assets/request.png";
import review from "../../assets/review.png";
import dash from "../../assets/dash.png";
import Browser from "../../assets/browser.png";
import Home from "../../assets/Home.png";
import Evaluator from "../../assets/Evaluator_Comp.png";
import { Subtitle, Text, Column, Row } from "../../theme/index";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 660px;
  padding: 1em 0;
`;

const Grid = styled.div`
  width: 75%;
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(1, 300px);
  grid-auto-rows: 100px;
`;

const StyledBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f5f7;
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  margin: 1.5em 0;
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

const StyledRow = styled(Row)`
  justifycontent: center;
  flex-direction: ${props => props.direction};
  margin: 0 auto;
  width: 70%;
`;

const Icon = styled.i`
  font-size: 2em;
  transition: 500ms;
  color: ${props => (props.active ? "#00b2aa" : "#BFD1DA")};
`;

function Box({ icon, id, selected, title, description, handleClick }) {
  return (
    <StyledBox id={id} onClick={() => handleClick(id)}>
      <Icon className={icon} active={id === selected} />
      <Text boxtitle active={id === selected}>
        {title}
      </Text>
      <Text boxdesc>{description}</Text>
    </StyledBox>
  );
}

export default class Mocks extends Component {
  state = {
    selected: "clinical"
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
    const { values, type, title } = this.props;
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
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
              />

              <Benefit
                img={Evaluator}
                width="40%"
                type="primary"
                title="Evaluations"
              />

              <Benefit
                img={Browser}
                width="90%"
                type="primary"
                title="To Do List"
              />
            </Slider>
          </div>
        ) : (
          <StyledRow direction={type === "student" ? "row-reverse" : "row"}>
            <Column width="50%">
              <Subtitle>{title}</Subtitle>
              <Grid>
                {values &&
                  values.map((key, index) => {
                    return (
                      <Box
                        key={index}
                        id={key.id}
                        title={key.title}
                        icon={key.icon}
                        handleClick={this.handleClick}
                        selected={selected}
                        description={key.description}
                      />
                    );
                  })}
              </Grid>
            </Column>
            <Column width="50%">
              <Row>
                {selected === "clinical" && (
                  <Mock img={clinical} height="500px" />
                )}
                {selected === "request" && (
                  <Mock img={request} height="500px" />
                )}
                {selected === "review" && <Mock img={review} height="500px" />}
                {selected === "add" && <Mock img={dash} height="500px" />}
                {selected === "accountable" && (
                  <Mock img={dash} height="500px" />
                )}
                {selected === "insight" && <Mock img={dash} height="500px" />}
              </Row>
            </Column>
          </StyledRow>
        )}
      </Wrapper>
    );
  }
}
