import React, { Component } from "react";
import "./navigator.css";

export default class Navigator extends Component {
	render() {
		return (
			<div className="left">
				<ul>
					<li>
						<a className="active" href="./">
							<span></span>
						</a>
					</li>
					<li>
						<a href="./">
							<span></span>
						</a>
					</li>
					<li>
						<a href="./">
							<span></span>
						</a>
					</li>
					<li>
						<a href="./">
							<span></span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
