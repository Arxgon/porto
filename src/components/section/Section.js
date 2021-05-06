import React, { Component } from "react";
// import Title from "../atoms/title/Title";
import "./section.css";

export default class Section extends Component {
	render() {
		return (
			<div className="section">
				<div className="sct-wrapper">
					<div className="slide">
						{this.props.title}
						{this.props.content}
					</div>
				</div>
			</div>
		);
	}
}
