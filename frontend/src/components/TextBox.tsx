import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: palevioletred;
  font-size: 80px;
`

// interface IHeaderProps {
//   // name: string
//   // age?: number
//   children: React.ReactNode
// }


  function handleClick() {
    console.log("Sent");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("/analysis", { method: "POST" });
  }


export default function TextBox() {
  return (
    <form>
    <label>
     <textarea id="text" name="text"/>
    </label>
    <div>
    <button type="button" onClick={handleClick}>
        Analyse my text!
      </button>
   </div>
   </form>
  )
}
