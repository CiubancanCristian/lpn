import React from "react";

import Video from "../../components/video/video.component.jsx";

import "./rush.styles.css";

const RushSection = () => (
	<div className="rush-section">
		<div className="sub-section">
			<h1>Fall Rush 2019</h1>
		</div>
		<div>
			<Video src="https://www.youtube.com/embed/B7xLhxnaju0" />
		</div>
		<h2>GROW FORWARD, GIVE BACK.</h2>
		<h1>ΛΦΝ RECRUITMENT EVENTS </h1>
		<div className="lpn-event">
			<h4>BUSINESS FRAT PANEL</h4>
			<p>TUESDAY, 10/1 | 7 - 9PM</p>
			<p>SB1 1200 | CASUAL</p>
		</div>
		<div className="lpn-event">
			<h4>INFO NIGHT</h4>
			<p>WEDNESDAY, 10/2 | 7 - 9PM</p>
			<p>MOSS COVE B | BUSINESS CASUAL</p>
		</div>
		<div className="lpn-event">
			<h4>MEET THE BROS</h4>
			<p>THURSDAY, 10/3 | 7 - 9PM</p>
			<p>EMERALD BAY A | CASUAL</p>
		</div>
			<div className="lpn-event">
			<h4>MEET THE BROS</h4>
			<p>TUESDAY, 10/8 | 7 - 9PM</p>
			<p>EMERALD BAY A | BUSINESS PROFESSIONAL</p>
		</div>
		<div className="lpn-event">
			<h4>INVITEONLY SOCIAL</h4>
			<p>WEDNESDAY, 10/9 | 7 - 9PM</p>
			<p>DESS CASUAL</p>
		</div>
	</div>
);

export default RushSection;
