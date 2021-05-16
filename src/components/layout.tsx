/** @jsx jsx */
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, css } from "@emotion/react"

import "./layout.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Wrapper } from "./Wrapper"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex: 1;
        flex-direction: column;
      `}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper
        css={css`
          display: flex;
          flex: 1;
        `}
      >
        <main
          css={css`
            display: flex;
            flex: 1;
          `}
        >
          {children}
        </main>
      </Wrapper>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
