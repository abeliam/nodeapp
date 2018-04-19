import React from "react"
import { Hero, HeroBody, Container, Title } from "bloomer"

const NotFound = () => (
  <Hero isColor="warning" isSize="medium">
    <HeroBody>
      <Container hasTextAlign="centered">
        <Title isSize={2}>Erreur 404</Title>
        <Title isSize={5}>Page introuvable</Title>
      </Container>
    </HeroBody>
  </Hero>
)

export default NotFound
