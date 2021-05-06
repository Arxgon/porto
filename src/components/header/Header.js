import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<a className="name" href="./">
					Iqbal Arif Firmansyah
				</a>
				<div className="wrap">
					<div className="icon">
						<a href="https://twitter.com">twitter</a>
						<a href="https://twitter.com">twitter</a>
						<a href="https://twitter.com">twitter</a>
					</div>
				</div>
			</div>
		);
	}
}
