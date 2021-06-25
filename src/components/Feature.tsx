/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx, css } from "@emotion/react"

import { Wrapper } from "./Wrapper"
import { mediaQuery } from "../style/mediaQueries"

interface FlipProp {
  flip?: boolean
}

interface FeatureProps extends FlipProp {
  title: string
  children: React.ReactNode
  image: React.ReactNode
}

export const Feature = ({ children, image, title, flip }: FeatureProps) => (
  <Container as="section" flip={flip}>
    <Details>
      <h2>{title}</h2>
      {children}
    </Details>
    <ImageWrapper>{image}</ImageWrapper>
  </Container>
)

const Details = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  ${mediaQuery.desktop} {
    width: 50%;
    margin-bottom: 25%;
  }
`

const ImageWrapper = styled.div`
  height: 800px;
  width: 400px;
  position: relative;
`

const Container = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  ${mediaQuery.desktop} {
    min-height: 40vh;
    margin-bottom: -5rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ flip }: FlipProp) => (flip ? "row-reverse" : "row")};
  }
`
