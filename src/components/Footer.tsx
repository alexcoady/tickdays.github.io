/** @jsx jsx */
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/react"

import { Wrapper } from "./Wrapper"
import { AppLinks } from "./AppLinks"
import { white } from "../style/colors"

const Container = styled.footer`
  padding: 20px 0;
`

const Title = styled.h4`
  margin-bottom: 0.5rem;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Footer = () => (
  <Container
    css={css`
      background-color: ${white};
    `}
  >
    <Wrapper>
      <Title>
        Tickdays is available on the App Store and Google Play store
      </Title>
      <Row>
        <AppLinks />
        <span>© {new Date().getFullYear()} Alex Coady</span>
      </Row>
    </Wrapper>
  </Container>
)
