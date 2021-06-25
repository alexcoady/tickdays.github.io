import * as React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Wrapper } from "../../components/Wrapper"
import { blue } from "../../style/colors"
import { BlogHeader } from "../../components/BlogHeader"

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Wrapper>
        <BlogHeader
          date={frontmatter.date}
          author={frontmatter.author}
          subtitle={frontmatter.subtitle}
        >
          {frontmatter.title}
        </BlogHeader>
        <Remark dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        author
        title
        subtitle
      }
    }
  }
`

const Remark = styled.div`
  padding-top: 2rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    max-width: 700px;
    line-height: 1.5;
  }

  a {
    color: ${blue};
  }

  img {
    max-width: 100%;
  }
`
