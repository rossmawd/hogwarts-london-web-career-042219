import piggy from '../porco.png'
import React, { Component } from "react";

export default class Nav extends Component  {
  render() {
    return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <br></br>
        <button onClick={this.props.toggleGreased} className="ui button">{ this.props.filterForGreased ? "Show all pigs" : "Show Greased Pigs"}</button>
        <button onClick={this.props.alphabetisePigs} className="ui button">{ this.props.sortByName ? "Go Back" : "Alphabetise Pigs"}</button>
        <button onClick={this.props.weightSorted} className="ui button">{ this.props.sortByWeight ? "Go Back" : "Sort by weight"}</button>

      </div>
		</div>
	)}
}


