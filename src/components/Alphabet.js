import React from "react";
import styled from "styled-components";


const Block = styled.div`
background-color : #86AEA8;
margin : 5px;
border-radius : 50%;
&[disabled] {
  background-color: ${props => (props.wrongChar ? "red" : "#86AEA8")};
}
`;
const Letter = styled.span`
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Mansalva", cursive;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: ${props => (props.endGame ? "none" : "auto")};

  &:hover {
    color: lightcoral;
  }

  &[disabled] {
    color: ${props => (props.wrongChar ? "red" : "grey")};
    opacity: ${props => (props.wrongChar ? "0.2" : "0.4")};
    pointer-events: none;
    text-decoration: line-through;
  }
`;

const LetterBank = styled.div`
  width: 80%;
  height: 25%;
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
 
`;
 // background-color: lavenderblush;
const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const buttonSound = () => {
  console.log('ok')
}
export default ({ guesses, wrongGuesses, updateGuesses, endGame }) => {
  return (
    <LetterBank>
      {alphabets.map((char, idx) => (
        <Block key={idx} onClick={buttonSound} >
        <Letter 
          key={idx}
          endGame={endGame}
          disabled={guesses.includes(char)}
          wrongChar={wrongGuesses.includes(char)}
          onClick={() => updateGuesses(char)}
        >
          {char}
        </Letter>
        </Block>
      ))}
    </LetterBank>
  );
};
