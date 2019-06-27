import React, { Component } from "react";
import hogs from "../porkers_data";
import PigCard from "./PigCard";

export default class PigBrowser extends Component {
  filterArr = () => {
    return hogs.filter(hog => hog.greased)
    }

  render() {
    return (
      <div className="ui grid container">
        { this.props.filterForGreased ? this.filterArr().map(hog => <PigCard hog={hog} />) : hogs.map(hog => <PigCard hog={hog} />)  }
       // 
      </div>
    );
  }
}
