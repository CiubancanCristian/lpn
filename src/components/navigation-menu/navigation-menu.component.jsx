import React from "react";

import { ReactComponent as Icon } from "../../assets/menu-button.svg";

import "./navigation-menu.styles.css";

const MenuIcon = () => {
	return (
		<div className="menu-icon">
			<Icon className="shopping-icon"/>
		</div>
	);
};

export default MenuIcon;
