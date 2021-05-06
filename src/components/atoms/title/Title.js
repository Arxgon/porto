import React, { Component } from "react";
import "./title.css";

export default class Title extends Component {
	render() {
		return (
			<div className="title">
				<h1 className="heading">
					{/* IQBAL ARIF <br></br> FIRMANSYAH */}
					{this.props.header}
				</h1>
				<p className="text">
					{this.props.paragraphOne}
					<br></br> {this.props.paragraphTwo}
				</p>
				<a className="btn" href="./" style={this.props.btnStyle}>
					{this.props.btnText}
				</a>
			</div>
		);
	}
}
