import React from "react";
import styled from "styled-components";

const HiddenWord = styled.div`
  width: 20%;
  height: 50%;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const HiddenLetter = styled.span`
  width: 100%;
  margin: 10px;
  font-size: 25px;
  font-weight: 400;
  font-family: sans-serif;
  text-transform: uppercase;
  color: ${props => (props.exposed ? "orangered" : "black")};
`;

export default ({ secretWord, endGame, correctGuesses }) => {
  const hiddenWord = secretWord.split("").map((char, idx) =>
    correctGuesses.includes(char) ? (
      <HiddenLetter key={idx}>{char}</HiddenLetter>
    ) : endGame ? (
      <HiddenLetter exposed key={idx}>
        {char}
      </HiddenLetter>
    ) : (
      <HiddenLetter key={idx}>_</HiddenLetter>
    )
  );

  return <HiddenWord>{hiddenWord}</HiddenWord>;
};
