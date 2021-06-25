/** @jsx jsx */
import { jsx } from "@emotion/react"
import styled from "@emotion/styled"

import { oatMedium } from "../style/colors"
import { mediaQuery } from "../style/mediaQueries"

interface BlogHeaderProps {
  children?: React.ReactNode
  date?: string
  author?: string
  subtitle?: string
}

export const BlogHeader = ({
  author,
  children,
  date,
  subtitle,
}: BlogHeaderProps) => (
  <Container>
    <Title>{children}</Title>
    {!!(date || author) && (
      <Meta>
        {!!date && <Date>{date} </Date>}
        {!!author && <Author>/ By {author}</Author>}
      </Meta>
    )}
    {!!subtitle && <Subtitle role="doc-subtitle">{subtitle}</Subtitle>}
  </Container>
)

const Container = styled.header`
  padding: 3rem 0;
  border-bottom: 1px solid ${oatMedium};
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1.2;

  ${mediaQuery.tablet} {
    font-size: 3rem;
    max-width: 700px;
  }
`

const Meta = styled.div`
  display: flex;
  margin-top: 1rem;
  font-weight: 600;
`

const Date = styled.time`
  margin-right: 0.5rem;
`

const Author = styled.address`
  font-style: normal;
`

const Subtitle = styled.div`
  font-size: 1.4rem;
  max-width: 700px;
  margin-top: 2rem;
  line-height: 1.4;
`
