/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AppStoreImage from "../svgs/app-store-dark.inline.svg"
import { mediaQuery } from "../style/mediaQueries"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${mediaQuery.desktop} {
    flex-direction: row;
  }
`

const Column = styled.div`
  margin-bottom: 20px;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1 0;

  &:last-child {
    margin-bottom: 0;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AppStoreLinks {
      site {
        siteMetadata {
          appStoreUrl
          playStoreUrl
        }
      }
      googlePlayImage: file(relativePath: { eq: "google-play-badge.png" }) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      todayImage: file(relativePath: { eq: "today.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Column
          css={css`
            align-items: center;
            text-align: center;
          `}
        >
          <h1>Track your good days with Tickdays</h1>
          <p>
            Tickdays is a free app for tracking your good days, and for doing
            more of the things you want to
          </p>

          <Links>
            <a target="_blank" href={data.site.siteMetadata.appStoreUrl}>
              <AppStoreImage />
            </a>
            <a target="_blank" href={data.site.siteMetadata.playStoreUrl}>
              <Img
                fadeIn={false}
                fixed={data.googlePlayImage.childImageSharp.fixed}
              />
            </a>
          </Links>
        </Column>
        <Column>
          <div
            css={css`
              width: 300px;
              margin: 0 auto;
            `}
          >
            <Img fluid={data.todayImage.childImageSharp.fluid} />
          </div>
        </Column>
      </Container>
    </Layout>
  )
}

export default IndexPage
