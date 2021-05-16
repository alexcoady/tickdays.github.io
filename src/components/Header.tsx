/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"
import { Link } from "gatsby"

import { Logo } from "./Logo"
import { Wrapper } from "./Wrapper"

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
`

interface HeaderProps {
  siteTitle: string
}

export const Header = ({ siteTitle = "" }: HeaderProps) => (
  <Wrapper>
    <Content>
      <Logo />
      <h1 style={{ margin: 0, marginLeft: "10px" }}>
        <Title to="/">{siteTitle}</Title>
      </h1>
    </Content>
  </Wrapper>
)
