import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
//import hogs from "../porkers_data";
import PigBrowser from "./PigBrowser";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterForGreased: false,
      sortByName: false,
      sortByWeight: false
    }
  }

  toggleGreased = () => {
    this.setState({
      filterForGreased: !this.state.filterForGreased
    })
  }

  alphabetisePigs = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  weightSorted = () => {
    console.log('hello')
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }
  

  render() {
    return (
      <div className="App">
        <Nav
          toggleGreased={this.toggleGreased}
          alphabetisePigs={this.alphabetisePigs}
          weightSorted={this.weightSorted}

          filterForGreased={this.state.filterForGreased}
          sortByName={this.state.sortByName}
          sortByWeight={this.state.sortByWeight}

        />
        <PigBrowser
          filterForGreased={this.state.filterForGreased}
          sortByName={this.state.sortByName}
          sortByWeight={this.state.sortByWeight}

        />
      </div>
    );
  }
}

export default App;
