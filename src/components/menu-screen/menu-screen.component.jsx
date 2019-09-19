import React from "react";

import "./menu-screen.styles.css";

const MenuScreen = ({ menuClick }) => (
	<div className="menu-screen">
		<div className="exit-button" onClick={menuClick}>
			<p className="x-button">X</p>
		</div>
		<div className="menu-content">
		<p className="menu-link">ABOUT</p>
		<p className="menu-link">BROTHERS</p>
		<p className="menu-link">INVOLVEMENT</p>
		<p className="menu-link">CAREERS</p>
		<p className="menu-link">RUSH 2019</p>
		<p className="menu-link">CONTACT US</p>
		</div>
	</div>
);

export default MenuScreen;
