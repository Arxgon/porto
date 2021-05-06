import React, { Component } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<a className="name" href="./">
					Iqbal Arif Firmansyah
				</a>
				<div className="wrap">
					<div className="icon">
						<a href="https://twitter.com/ar_replican">
							<FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
						</a>
						<a href="https://www.instagram.com/iqbi_af/">
							<FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
						</a>
						<a href="https://dribbble.com/arxgon">
							<FontAwesomeIcon icon={["fab", "dribbble"]}></FontAwesomeIcon>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
