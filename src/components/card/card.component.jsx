import React from "react";

import "./card.styles.css";
import logo from "../../assets/li_logo.png";

const Card = ({ name, section, classTaken, work, linkedin, poza }) => {
	var imgurl = "brothers/" + name.replace(/ /g, "_") + ".JPG";
	var pic = require(`../../assets/${imgurl}`);
	console.log(imgurl);
	return (
		<div className="card">
			<div className="card-body">
				<img className="card-image" alt="brother" src={pic} />
				<div className="card-details">
					<p>{name}</p>
					<p className="details-text">Section: {section}</p>
					<p className="details-text">Class: {classTaken}</p>
					<p className="details-text">Worked at: {work}</p>
					<a href={linkedin} class=" details-text click dim">
						<img border="0" alt="W3Schools" src={logo} width="20" height="20"/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
