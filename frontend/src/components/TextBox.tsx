import React, { Component } from "react"

class TextBox extends Component {
  state = {
    name: ""
  };

  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  sendText = () => {
    let text = JSON.stringify(this.state)
    console.log("sent: " + text);
    const requestOptions = {
      method: "POST",
      body: text,
      headers: {"Content-Type": "application/json"}
    };
    fetch("/analysis", requestOptions)
    .then(function(response){
      return response.json()
    }).then(function(body){
      console.log(body);
    });;
    
  };


  render() {
    return (
      <div>
      <input onChange={this.handleInput} placeholder="Text to analyse" />
      <button onClick={this.sendText}>Analyse me!</button>
      <div>
      <p>Characters: </p>
      </div>
      </div>
    );
  }
}

export default TextBox;
