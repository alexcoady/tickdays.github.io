/** @jsx jsx */
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { jsx } from "@emotion/react"
import { mediaQuery } from "../style/mediaQueries"
import { blue, oatMedium } from "../style/colors"

interface BlogItemProps {
  date: string
  slug: string
  title: string
  author?: string
}

const BlogLink = styled(Link)`
  display: block;
  border-bottom: 1px solid ${oatMedium};
  color: inherit;
  text-decoration: none;

  &:last-child {
    border-bottom: 0 none;
  }

  &:hover,
  &:active {
    color: ${blue};
  }

  ${mediaQuery.tablet} {
    &:hover > div,
    &:active > div {
      transform: translateX(1rem);
    }
  }
`

const BlogLinkInner = styled.div`
  padding: 60px 0;

  ${mediaQuery.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.15s ease-in;
  }
`

const Date = styled.time`
  flex-shrink: 0;

  ${mediaQuery.tablet} {
    width: 160px;
  }
`

const BlogTitle = styled.h3`
  margin: 1rem 0;
  font-size: 2rem;

  ${mediaQuery.tablet} {
    flex-grow: 1;
  }
`

const Author = styled.span`
  flex-shrink: 0;

  ${mediaQuery.tablet} {
    width: 160px;
    display: flex;
    justify-content: flex-end;
  }
`

export const BlogItem = ({ author, date, slug, title }: BlogItemProps) => {
  return (
    <BlogLink to={slug}>
      <BlogLinkInner>
        <Date dateTime={date}>{date}</Date>
        <BlogTitle>{title}</BlogTitle>
        {!!author && <Author>By {author}</Author>}
      </BlogLinkInner>
    </BlogLink>
  )
}
