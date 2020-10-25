import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const StyledBorder = styled.div`
    background-color: #e5f0f5;
    border-width: 5px;
    border-style: solid;
    border-color: #5c62a4;
    border-radius: 20px;
    margin: 80px;
`;



export default function MainBorder() {
    return <StyledBorder/>
  }
