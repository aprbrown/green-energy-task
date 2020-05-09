import React from "react";
import logo from "../media/logo.svg";

function Logo(props) {
	return <img src={logo} alt="Green Logo" style={props.style} />;
}

export default Logo;
