/** @jsx jsx */
import { graphql } from "gatsby"
import { jsx } from "@emotion/react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Wrapper } from "../../components/Wrapper"
import { BlogItem } from "../../components/BlogItem"
import { BlogHeader } from "../../components/BlogHeader"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Wrapper>
        <BlogHeader>Blog posts</BlogHeader>
        {edges.map(({ node }) => (
          <BlogItem key={node.id} {...node.frontmatter} />
        ))}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
          }
        }
      }
    }
  }
`
