import React, { Component } from "react";
//import hogs from "../porkers_data";
//import PigDetails from "./PigDetails";

export default class PigCard extends Component {

  constructor() {
    super()
    this.state ={
      clicked: false
    }
  }
  // pig = this.props.hog.name
  hogNameImg = name => {
    //let name = hog.name
    let lowerCase = name.toLowerCase();
    let nameArr = lowerCase.split(" ");
    let underScored = nameArr.join("_")
    let final = underScored + ".jpg";

    return require(`../hog-imgs/` + final);
  };

  renderPigDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    return (
      <div onClick={this.renderPigDetails} className="ui eight wide column">
        <div clasName="ui card">
          <img
            src={this.hogNameImg(this.props.hog.name)}
          />
          <h3>{this.props.hog.name}</h3>
          
        {
          this.state.clicked ?
          <div>
            <p>{this.props.hog.specialty}</p>
            <p>Greased: {this.props.hog.greased ? "Yes" : "No"}</p>
            <p>
              Weight: {
                this.props.hog[
                "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </p>
            <p>Highest Medal: {this.props.hog["highest medal achieved"]}</p>
          </div> : null
        }
        </div>
      </div>
    );
  }
}

// str.toLowerCase();
//The + operator
