import React, { Component } from "react";
import Section from "../section/Section";
import Title from "../atoms/title/Title";
import Content from "../atoms/content/Content";

export default class ContentWrapper extends Component {
	render() {
		return (
			<div className="content">
				<div
					style={{ height: "100%", position: "relative", touchAction: "none" }}
				>
					<Section
						title={
							<Title
								header="IQBAL ARIF FIRMANSYAH"
								paragraphOne="web designer / "
								paragraphTwo="front-end engineer."
								btnText="Show me more"
							></Title>
						}
						content={<Content></Content>}
					></Section>
					<Section>
						<Title header="ABOUT" btnStyle={{ display: "none" }}></Title>
					</Section>
				</div>
			</div>
		);
	}
}
