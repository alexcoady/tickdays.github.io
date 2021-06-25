/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx } from "@emotion/react"
import { Link } from "gatsby"

import LogoSVG from "../svgs/logo.inline.svg"
import { Wrapper } from "./Wrapper"
import { mediaQuery } from "../style/mediaQueries"
import { blue, oatDark, white } from "../style/colors"

const LOGO_ASPECT_RATIO = 943 / 200

interface HeaderProps {
  siteTitle: string
}

export const Header = (_: HeaderProps) => (
  <Sticky>
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Menu>
          <HeaderLink activeClassName="active" to="/">
            Home
          </HeaderLink>
          <HeaderLink activeClassName="active" to="/features/">
            Features
          </HeaderLink>
          <HeaderLink partiallyActive activeClassName="active" to="/blog/">
            Blog
          </HeaderLink>
        </Menu>
      </Content>
    </Wrapper>
  </Sticky>
)

const Sticky = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${white};
  z-index: 999;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0 1rem;
  justify-content: space-between;
  overflow: hidden;
`

const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  line-height: 1.5;
  position: relative;

  &.active {
    font-weight: 600;
  }

  &:not(.active) {
    &:hover,
    &:active {
      color: ${blue};
    }
  }

  ${mediaQuery.tablet} {
    margin-left: 1rem;

    &.active:after {
      height: 2px;
      background-color: ${oatDark};
      width: 100%;
      position: absolute;
      display: block;
      content: "";
    }
  }
`

const Logo = styled(LogoSVG)`
  height: 30px;
  width: ${30 * LOGO_ASPECT_RATIO}px;

  ${mediaQuery.tablet} {
    height: 40px;
    width: ${40 * LOGO_ASPECT_RATIO}px;
  }
`
