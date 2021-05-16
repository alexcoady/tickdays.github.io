/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

import { Wrapper } from "./Wrapper"

const Container = styled.footer`
  padding: 20px 0;
`

export const Footer = () => (
  <Container>
    <Wrapper>© {new Date().getFullYear()} Alex Coady</Wrapper>
  </Container>
)
