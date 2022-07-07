import "./App.css"
import React, { Dropdown } from "semantic-ui-react"
import { Component } from "react"
const options = [
  { key: 1, text: "1", value: 1 },
  { key: 2, text: "2", value: 2 },
  { key: 3, text: "3", value: 3 },
]
//function App(){
export default class DropdownExampleUncontrolled extends Component {
  state = {}
  handleValue = (e, { value }) => this.setState({ value })
  render() {
    const { value } = this.state
    return (
      <div>
        <Dropdown
          onChange={this.handleValue}
          options={options}
          placeholder="choose an option"
          selection
          value={value}
        />
        <span> value={this.state.value} </span>
      </div>
    )
  }
}
//export default App
