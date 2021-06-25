/** @jsx jsx */
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { jsx, css, Global } from "@emotion/react"

import "./layout.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { oat, oatDark } from "../style/colors"

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
      <Global
        styles={css`
          body {
            color: ${oatDark};
            background-color: ${oat};
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        css={css`
          display: flex;
          flex: 1;
          flex-direction: column;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
