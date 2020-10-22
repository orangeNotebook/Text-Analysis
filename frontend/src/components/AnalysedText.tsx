import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const AnalysedText = styled.div`
  font-family: Calibri;
  color: red;
  font-size: 20px;
  font-weight: 900;
  border-style: solid;
  margin: 20px;
  padding: 10px;
`;

interface IAnalysedText {
  text: string;
}

const FoodItem: React.FC<IAnalysedText> = (props) => {
  

  return (
    <AnalysedText>
      <p>{props.text}</p>
    </AnalysedText>
  );
};

export default FoodItem;
