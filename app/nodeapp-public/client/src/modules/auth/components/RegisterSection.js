import React from "react"

import { Section, Container, Title, Field, Control, Button, Input, Label } from "bloomer"

const RegisterSection = (props) => (
  <Section id="login">
    <Container>
      <Title isSize={2}>Register</Title>

      <form onSubmit={props.handleSubmit}>
        <Field>
          <Label>Username</Label>
          <Control>
              <Input type="text" placeholder="Username" />
          </Control>
        </Field>

        <Field>
          <Label>Mail</Label>
          <Control>
              <Input type="text" placeholder="Mail" />
          </Control>
        </Field>

        <Field>
          <Label>Password</Label>
          <Control>
              <Input type="text" placeholder="Password" />
          </Control>
        </Field>

        <Field>
          <Button isColor="primary">Register</Button>
        </Field>

      </form>

    </Container>
  </Section>
)

export default RegisterSection
