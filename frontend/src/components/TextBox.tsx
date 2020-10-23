import React, { Component } from "react"

class TextBox extends Component {
  state = {
    name: ""
  };

  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  sendText = () => {
    console.log(this.state.name);
    
  };

  render() {
    return (
      <div>
      <input onChange={this.handleInput} placeholder="Text to analyse" />
      <button onClick={this.sendText}>Analyse me!</button>
      </div>
    );
  }
}

export default TextBox;
