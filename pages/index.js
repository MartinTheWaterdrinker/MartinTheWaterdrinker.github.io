import React from "react"
import { Container, Button } from "semantic-ui-react"
import DropdownExampleUncontrolled from "./example"
import Image from "next/image"

const App = () => (
  <Container style={{ margin: 20 }}>
    <DropdownExampleUncontrolled />
  </Container>
)

export default App

function customLoader({ src }) {
  return src
}

export function customImage(props) {
  return <Image {...props} loader={customLoader} alt={pic} />
}
