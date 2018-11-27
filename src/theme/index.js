import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: 66px;
  color: #3a485d;
  font-weight: 600;
  margin: 0.25em 0;
`;

export const Subtitle = styled.h2`
  font-family: "Ubuntu", sans-serif;
  font-size: 50px;
  color: #3a485d;
  font-weight: 600;
  margin: 0;
`;

export const Text = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  color: #a1aeb7;
  font-weight: 300;
  line-height: 2.2em;
  ${props =>
    props.large &&
    css`
      font-size: 22px;
      color: #3a485d;
      font-weight: 600;
      margin: 0;
      line-height: 1em;
    `};
  ${props =>
    props.index &&
    css`
      line-height: 1em;
    `};
  ${props =>
    props.boxtitle &&
    css`
      color: #505d68;
      font-size: 16px;
      line-height: 1em;
      margin: 1em 0 0 0;
    `};
  ${props =>
    props.boxdesc &&
    css`
      font-size: 14px;
    `};
  ${props =>
    props.footer &&
    css`
      font-size: 16px;
      margin-left: 3em;
      color: #fff;
    `};
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  color: ${props => (props.footer ? "#fff" : "#3a485d")};
  font-weight: 600;
  margin-right: 3em;
  @media (max-width: 1100px) {
    font-size: 1.2em;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
  text-align: ${props => props.textalign};
`;

export const Row = styled.div`
  display: flex;
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
`;

export const Button = styled.button`
  background-color: inherit;
  width: 146px;
  height: 40px;
  outline: none;
  border: 1px solid #505d68;
  color: #505d68;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  border-radius: 3px;
  transition: 750ms;
  &:hover {
    background-color: #667785;
    color: #fff;
  }
  ${props =>
    props.nav &&
    css`
      margin-right: 1.5em;
      background: #00b2aa;
      width: 165px;
      height: 45px;
      border: 1px solid transparent;
      color: #fff;
      &:hover {
        background-color: #00d4ca;
      }
    `};
  ${props =>
    props.primary &&
    css`
      background: #00b2aa;
      width: 165px;
      height: 45px;
      border: 1px solid transparent;
      color: #fff;
      &:hover {
        background-color: #00d4ca;
      }
    `};
`;
