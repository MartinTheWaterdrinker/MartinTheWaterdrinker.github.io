import React, { Dropdown, Button } from "semantic-ui-react"
import { Component } from "react"
const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
]

export default class DropdownExampleUncontrolled extends Component {
  state = { value: 0 }
  handleValue = (e, { value }) => this.setState({ value })
  render() {
    const { number = 0, value } = this.state
    return (
      <div>
        <Dropdown
          onChange={this.handleValue}
          options={options}
          placeholder="choose an option"
          selection
          value={value}
        />

        <span> value={number} </span>
        <br />
        <Button onClick={change} /*{this.handleValue}*/>Send</Button>
      </div>
    )
    function change(number, value) {
      this.state((number = value))
    }
  }
}
