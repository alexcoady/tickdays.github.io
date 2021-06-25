/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { StaticImage } from "gatsby-plugin-image"

import AppStoreImage from "../svgs/app-store-dark.inline.svg"

export const AppLinks = () => {
  const data = useStaticQuery(graphql`
    query AppStoreLinks {
      site {
        siteMetadata {
          appStoreUrl
          playStoreUrl
        }
      }
    }
  `)

  return (
    <Links>
      <OutboundLink target="_blank" href={data.site.siteMetadata.appStoreUrl}>
        <AppStoreImage />
      </OutboundLink>
      <OutboundLink target="_blank" href={data.site.siteMetadata.playStoreUrl}>
        <StaticImage
          src="../images/google-play-badge.png"
          alt="Get it on Google Play"
          height={60}
          placeholder="none"
        />
      </OutboundLink>
    </Links>
  )
}

const Links = styled.div`
  display: flex;
  align-items: center;
`
