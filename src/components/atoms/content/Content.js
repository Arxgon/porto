import React, { Component } from "react";
import "./content.css";

export default class Content extends Component {
	render() {
		return (
			<a className="image cntn" href="./" style={this.props.image}>
				<div></div>
			</a>
		);
	}
}
