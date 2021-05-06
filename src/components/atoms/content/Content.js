import React, { Component } from "react";
import "./content.css";
import me from "../../../assets/img/me.jpg";

export default class Content extends Component {
	render() {
		return (
			<a
				className="image cntn"
				href="./"
				style={{ backgroundImage: `url(${me})` }}
			>
				<div></div>
			</a>
		);
	}
}
