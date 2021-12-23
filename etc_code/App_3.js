import "./styles.css";
import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.myDiv.getBoundingClientRect().height);
  }
  render() {
    return (
      <div ref={(ref) => (this.myDiv = ref)}>
        <h1>hi! react</h1>
        <MyComponent value={5} />
      </div>
    );
  }
}

export default App;
