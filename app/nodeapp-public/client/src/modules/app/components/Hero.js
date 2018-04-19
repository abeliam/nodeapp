import React from "react"
import { Hero, HeroBody, Container, Title } from "bloomer"

const Heroo = () => (
  <Hero isColor="info" isSize="medium">
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title isSize={2}>Home</Title>
      </Container>
    </HeroBody>
  </Hero>
)

export default Heroo
