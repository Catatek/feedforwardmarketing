import React, { Component } from "react";
import styled, { css } from "styled-components";
import Mock from "./Mock";
import clinical from "../../assets/clinical.png";
import request from "../../assets/request.png";
import review from "../../assets/review.png";
import add from "../../assets/add.jpg";
import accountable from "../../assets/accountable.jpg";
import insight from "../../assets/insight.jpg";
import { Subtitle, Text, Column, Row } from "../../theme/index";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;
  @media (max-width: 780px) {
    height: 100%;
    text-align: center;
  }
`;

const Grid = styled.div`
  width: 75%;
  display: grid;
  grid-gap: 45px;
  grid-template-columns: repeat(1, 300px);
  grid-auto-rows: 100px;
  ${props =>
    props.desktop &&
    css`
      @media (max-width: 1300px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-auto-rows: 150px;
        width: 100%;
        grid-gap: 50px;
        margin: 1em auto;
      }
    `}
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

  ${props =>
    props.desktop &&
    css`
      @media (max-width: 1300px) {
        margin: 0.5em 1em;
        align-items: center;
        padding: 0.5em;
        text-align: center;
      }
    `}
`;

const StyledRow = styled(Row)`
  justifycontent: center;
  flex-direction: ${props => props.direction};
  margin: 0 auto;
  width: 70%;
  ${props =>
    props.desktop &&
    css`
      @media (max-width: 1300px) {
        flex-direction: column-reverse;
        width: 90%;
        align-items: center;
      }
    `}
`;

const Icon = styled.i`
  font-size: 2em;
  transition: 500ms;
  color: ${props => (props.active ? "#00b2aa" : "#BFD1DA")};
`;

const StyledColumn = styled(Column)`
  width: 50%;
  @media (max-width: 1300px) {
    width: 95%;
    align-items: center;
    margin: 0 auto;
  }
`;

function Box({ icon, id, selected, title, description, handleClick, type }) {
  return (
    <StyledBox
      id={id}
      onClick={() => handleClick(id)}
      desktop={type === "organization"}
    >
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
    selected: ""
  };

  componentDidMount() {
    this.setState({ selected: this.props.selected });
  }

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
              margin: "1em 0"
            }}
          >
            <Subtitle>{title}</Subtitle>
            {type === "student" && (
              <Slider {...settings}>
                <Mock img={clinical} type="mobile" title="Effective" />

                <Mock img={request} type="mobile" title="Evaluations" />

                <Mock img={review} type="mobile" title="To Do List" />
              </Slider>
            )}
            {type === "organization" && (
              <Slider {...settings}>
                <Mock img={add} type="desktop" title="Effective" />

                <Mock img={accountable} type="desktop" title="Evaluations" />

                <Mock img={insight} type="desktop" title="To Do List" />
              </Slider>
            )}
          </div>
        ) : (
          <StyledRow
            direction={type === "student" ? "row-reverse" : "row"}
            desktop={type === "organization"}
          >
            <StyledColumn>
              <Subtitle>{title}</Subtitle>
              <Grid desktop={type === "organization"}>
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
                        type={type}
                      />
                    );
                  })}
              </Grid>
            </StyledColumn>
            <StyledColumn>
              <Row>
                {selected === "clinical" && (
                  <Mock img={clinical} type="mobile" />
                )}
                {selected === "request" && <Mock img={request} type="mobile" />}
                {selected === "review" && <Mock img={review} type="mobile" />}
                {selected === "add" && <Mock img={add} type="desktop" />}
                {selected === "accountable" && (
                  <Mock img={accountable} type="desktop" />
                )}
                {selected === "insight" && (
                  <Mock img={insight} type="desktop" />
                )}
              </Row>
            </StyledColumn>
          </StyledRow>
        )}
      </Wrapper>
    );
  }
}
