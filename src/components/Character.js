// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  color: black;
  box-shadow: 0px 1px 6px -2px #807f7f;
  background-color: lightgrey;
  opacity: 0.7;
  text-align: center;
`;

export default function Character(props) {
  const { name, height, mass, films } = props;
  return (
    <StyledCharacter>
      <h2>{name}</h2>
      <ul>
        <li>Height: {height}</li>
        <li>mass: {mass}</li>
        <li>films:</li>
        <ul>
          {films.map((film) => (
            <li>{film}</li>
          ))}
        </ul>
      </ul>
    </StyledCharacter>
  );
}
