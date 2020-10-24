import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-family: Tahoma, Geneva, sans-serif;
  color: palevioletred;
  font-size: 80px;
  font-weight: 1000;
`

interface IHeaderProps {
  children: React.ReactNode
}

export default function Header(props: IHeaderProps) {
  return <StyledH1>{props.children}</StyledH1>
}
