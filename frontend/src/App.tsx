import React, { Component } from "react";
import "./App.css";
import TextBox from "./components/TextBox"
import Header from "./components/Header"


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="MainBorder">
          <Header>Text Analysis</Header>
          <TextBox/>
        </div>
      </div>
    );
  }
}

export default App;