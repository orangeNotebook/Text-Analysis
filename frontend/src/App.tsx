import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import TextBox from "./components/TextBox"



function App() {
  return (
    <div>    
      <Header>Word Analysis</Header>
      <TextBox/>
      
    </div>

  );
}

export default App;
