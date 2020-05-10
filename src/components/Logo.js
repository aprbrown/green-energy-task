import React from "react";
import logo from "../media/logo.svg";

// Component to display company logo where the height of the logo is passed through props.
function Logo(props) {
	return <img src={logo} alt="Green Logo" style={{ height: props.height }} />;
}

export default Logo;
