import * as React from "react";

function SvgLogo(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 22"
			{...props}
			width="10.125em"
			height="2.93em"
			fill="white"
			stroke="white">
			<text
				transform="translate(-1.77 14.705)"
				fontFamily="'BookmanOldStyle-Italic'"
				fontSize={14}>
				{"Write-it"}
			</text>
		</svg>
	);
}

export default SvgLogo;
