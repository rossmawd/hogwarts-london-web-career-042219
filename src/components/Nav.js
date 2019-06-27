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
        <button onClick={this.props.toggleGreased} className="ui button">Filter Greased Pigs</button>
        <button onClick={this.props.toggleGreased} className="ui button">Alphabetise Pigs</button>
        <button className="ui button">Sort by weight</button>

      </div>
		</div>
	)}
}


