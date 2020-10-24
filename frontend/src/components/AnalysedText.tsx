import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const StyledAnalysedText = styled.div`
  border-width: 3px;
  border-style: solid;
  border-color: #5C62A4;
  border-radius: 20px;
  margin: 80px;
  background-color: #ffffff;


  font-family: Tahoma, Geneva, sans-serif;
  font-size: 28px;
  font-weight: 1000;
  color: palevioletred;
`;

interface IAnalysedText {
  characters: number,
  noSpceialCharacters: number,
  words: number,
  averageWordLength: number
}

const Analysis: React.FC<IAnalysedText> = (props) => {
  

  return (
    <div>
    <StyledAnalysedText>
      <p>Characters: {props.characters}</p>
      <p>Non-special characters: {props.noSpceialCharacters}</p>
      <p>Words: {props.words}</p>
      <p>Average word length: {props.averageWordLength}</p>
    </StyledAnalysedText>
    </div>
  );
};

export default Analysis;
