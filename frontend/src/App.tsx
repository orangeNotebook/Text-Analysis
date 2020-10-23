import React, { Component } from "react";
import TextBox from "./components/TextBox"
import Header from "./components/Header"

class App extends Component {


  render() {
    return (
      <div>
        <Header>Text Analysis</Header>
        <TextBox/>
      </div>
    );
  }
}

export default App;