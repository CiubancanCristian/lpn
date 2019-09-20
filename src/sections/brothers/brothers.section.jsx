import React from "react";

import Card from "../../components/card/card.component.jsx";

import "./brothers.styles.css";

const BrothersSection = ({ brothers }) => {
	return (
		<div className="brothers-section">
			{brothers.map((user, i) => {
				return (
					<Card
						key={i}
						section={brothers[i].Section}
						name={brothers[i].Name}
						classTaken={brothers[i].Class}
						work={brothers[i].Worked_At}
						linkedin={brothers[i].LinkedIn}
						poza={brothers[i].Image}
					/>
				);
			})}
		</div>
	);
};

export default BrothersSection;
