import { Grid, TextField } from "@material-ui/core";
import React from "react";

function Input(props) {
	return (
		<Grid item xs={12} sm={props.sm ? props.sm : null}>
			<TextField
				variant="outlined"
				required
				fullWidth
				onChange={props.handleChange}
				name={props.name}
				label={props.label}
				type={props.type ? props.type : null}
				id={props.id}
				autoComplete="current-password"
			/>
		</Grid>
	);
}

export default Input;
