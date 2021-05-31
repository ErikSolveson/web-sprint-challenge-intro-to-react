// Write your Character component here
import React from "react";
import styled from "styled-components";

function Character(props) {
  const { name, height, mass, hair_color } = props;

  const StyledCharacter = styled.div`
    width: 50%;
    background-color: gray;
    opacity: 0.8;
    margin: 20px;
    boarder-radius: 10px;
    h2 {
      color: blue;
    }
    &:hover {
      opacity: 1;
    }
  `;
  return (
    <StyledCharacter>
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
    </StyledCharacter>
  );
}

export default Character;
