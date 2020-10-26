import React, { Component } from "react"
import AnalysedText from "./AnalysedText"

import styled from "styled-components";

const StyledTextBox = styled.textarea`
  display: block;
  text-align:center;
  width:74%;
  height: 485px;
  margin: auto 5px auto 80px;
  padding: 10px;
  border-width:3px;
  border-style:solid;
  border-color:#5C62A4;
  border-radius:20px;
  background-color:#ffffff;

  float:left;

  font-family: Tahoma, Geneva, sans-serif;
  font-size: 15px;
  font-weight: 1000;
  color: palevioletred;
`;

class TextBox extends Component {
  state = {
    name: "",
    characters: 0,
    noSpecialCharacters: 0,
    words: 0,
    averageWordLength: 0 
  };

  setStateToText = (text) => {
    return new Promise((resolve, reject) => {
        resolve(this.setState({ name: text }))
      }
    )}

    setAnalysedText = (body) => {
     
          (this.setState({ 
            characters: body.characters,
            noSpecialCharacters: body.noSpecialCharacters,
            words: body.words,
            averageWordLength: body.averageWordLength
           }))
    }
      

  sendText = () => {
    let text = JSON.stringify(this.state)
    const requestOptions = {
      method: "POST",
      body: text,
      headers: {"Content-Type": "application/json"}
    };
    fetch("/analysis", requestOptions)
    .then((response) => {
      return response.json()
    }).then((body)=> {
      this.setAnalysedText(body)
    });;
    
  };

  handleInput = (event) => {
    this.setStateToText(event.target.value).then(this.sendText);
  };

  render() {
    return (
      <div>
        <StyledTextBox onChange={this.handleInput} placeholder="Text to analyse" />
        <div>
         <AnalysedText characters={this.state.characters} noSpceialCharacters={this.state.noSpecialCharacters} words={this.state.words} averageWordLength={this.state.averageWordLength}/>
       </div>
      </div>
    );
  }
}

export default TextBox;
