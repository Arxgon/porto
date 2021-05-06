import React, { Component } from "react";
import Section from "../section/Section";
import Title from "../atoms/title/Title";
import Content from "../atoms/content/Content";
import me from "../../assets/img/me.jpg";

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
								btnStyle={{ display: "none" }}
							></Title>
						}
						content={
							<Content
								image={{ backgroundImage: `url(${me})`, pointerEvents: "none" }}
							></Content>
						}
					></Section>
					<Section
						title={
							<Title
								header="About Me"
								paragraphOne="just ordinary creative human"
								btnText="Show me more"
							></Title>
						}
						content={
							<Content image={{ backgroundImage: `url(${me})` }}></Content>
						}
					></Section>
					<Section
						title={
							<Title
								header="Projects"
								paragraphOne="All my unfinished project"
								btnText="Show me more"
							></Title>
						}
						content={
							<Content image={{ backgroundImage: `url(${me})` }}></Content>
						}
					></Section>
				</div>
			</div>
		);
	}
}
