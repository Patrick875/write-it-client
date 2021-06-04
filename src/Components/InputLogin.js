import React from "react";
import { Typography } from "@material-ui/core";

function InputLogin(props) {
	return (
		<React.Fragment>
			<Typography
				variant="outlined"
				margin="normal"
				required
				fullWidth
				type={props.type ? props.type : null}
				onChange={props.handleChange}
				id={props.id}
				label={props.label}
				name={props.name}
				autoComplete="email"
				autoFocus
			/>
		</React.Fragment>
	);
}

export default InputLogin;
