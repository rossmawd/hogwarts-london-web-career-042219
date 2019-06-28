import React, { Component } from "react";
import hogs from "../porkers_data";
import PigCard from "./PigCard";

export default class PigBrowser extends Component {
  filterArr = () => {
    return hogs.filter(hog => hog.greased)
  }

  sortArr = () => {
    let alphaHogs = [...hogs].sort((a, b) => {
      return (a.name.localeCompare(b.name))
      // above is another approach to alphabetising strings as using the below method
      // return (a.name > b.name ? 1 : -1)
    })
    return alphaHogs
  }

  weightArr = () => {    
    let weightHogs = [...hogs].sort((a, b) => {
      return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    })
    return weightHogs
  }


  render() {
    return (
      <div className="ui grid container" >
        {this.props.filterForGreased ?
          this.filterArr().map(hog => <PigCard hog={hog} />)
          : this.props.sortByName ?
          this.sortArr().map(hog => <PigCard hog={hog} />)
          : this.props.sortByWeight ?
          this.weightArr().map(hog => <PigCard hog={hog} />)
          : hogs.map(hog => <PigCard hog={hog} />)}
    
      </div>
    );
  }
}
