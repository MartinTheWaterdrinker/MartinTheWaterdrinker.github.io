import React from "react"
import { Container } from "semantic-ui-react"
import DropdownExampleUncontrolled from "./example"

const App = () => (
  <Container style={{ margin: 20 }}>
    <DropdownExampleUncontrolled />
  </Container>
)

export default App

function customLoader({ src }) {
  return src
}

export function Image(props) {
  return <NextImage {...props} loader={customLoader} />
}
