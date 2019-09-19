import React from "react";

import MenuIcon from "../navigation-menu/navigation-menu.component";
import Logo from "../../assets/LPN_Logo.png";

import "./navigation.styles.css";

const Navigation = ({ menuClick }) => (
	<div className="navigation">
		<img className="lpn-logo"  src={Logo} alt="Logo"/>
		<p className="logo">Lambda Phi Nu</p>
		<div className="menu">
			<div className="menu-icon" onClick={menuClick}>
				<MenuIcon />
			</div>
		</div>
	</div>
);

export default Navigation;
