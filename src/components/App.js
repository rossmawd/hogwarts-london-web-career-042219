import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
//import hogs from "../porkers_data";
import PigBrowser from "./PigBrowser";

class App extends Component {
  //componentDidMount(){}
  constructor(props) {
    super(props)
    this.state = {
      filterForGreased: false
    }
  }

  toggleGreased = () => {
    this.setState({
      filterForGreased: !this.state.filterForGreased
    })
  }

  alphabetisePigs = () => {

  }

  render() {
    return (
      <div className="App">
        <Nav toggleGreased={this.toggleGreased} />
        <PigBrowser filterForGreased={this.state.filterForGreased} />
      </div>
    );
  }
}

export default App;
