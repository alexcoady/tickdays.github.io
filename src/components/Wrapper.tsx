import styled from "@emotion/styled"

import { mediaQuery } from "../style/mediaQueries"

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  ${mediaQuery.wide} {
    width: 960px;
    margin: 0 auto;
  }
`
