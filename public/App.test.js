import { render, screen } from "@testing-library/react"
import App from "./example"

test("renders learn rea@testing-library/reactct link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
