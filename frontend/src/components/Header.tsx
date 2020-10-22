import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: palevioletred;
  font-size: 80px;
`

interface IHeaderProps {
  // name: string
  // age?: number
  children: React.ReactNode
}

export default function Header(props: IHeaderProps) {
  return <StyledH1>{props.children}</StyledH1>
}
