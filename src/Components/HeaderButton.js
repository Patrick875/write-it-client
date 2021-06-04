import React from "react";
import { Link } from "react-router-dom";
import "./../SCSS/HeaderButton.scss";

function HeaderButton({ resource, name }) {
	return (
		<button className="create--journal">
			<Link>
				{resource.length ? `Add new ${name}` : `create your first ${name}`}
			</Link>
		</button>
	);
}

export default HeaderButton;
