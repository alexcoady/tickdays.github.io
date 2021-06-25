/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { mediaQuery } from "../style/mediaQueries"
import { StaticImage } from "gatsby-plugin-image"
import { Wrapper } from "../components/Wrapper"
import { AppLinks } from "../components/AppLinks"

export default () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper
      css={css`
        display: flex;
        flex-grow: 1;
      `}
    >
      <Container>
        <Column
          css={css`
            align-items: center;
            text-align: center;
          `}
        >
          <h1>Track your good days with Tickdays</h1>
          <p>
            Tickdays is the app for tracking your good days and building strong
            habits
          </p>

          <AppLinks />
        </Column>
        <Column>
          <StaticImage
            src="../images/insights.png"
            alt="Tickdays Today screen"
            width={400}
            placeholder="none"
          />
        </Column>
      </Container>
    </Wrapper>
  </Layout>
)

const Container = styled.div`
  padding: 1rem 0;
  ${mediaQuery.desktop} {
    display: flex;
  }
`

const Column = styled.div`
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1 0;
`
