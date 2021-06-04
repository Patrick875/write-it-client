import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signup } from "./../../Actions/authActions";
import Logo from "./../../Components/SVGs/Logo";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Input from "../../Components/Input";

export default function SignInSide() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const handleFormChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(formValues, history));
		history.push("/dashboard");
		//setFormValues({ email: "", password: "" });
	};
	const classes = useStyles();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={false} md={7} className={classes.image} />

			<Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Logo className={classes.logo} />
					<form className={classes.form} noValidate onSubmit={handleFormSubmit}>
						<Grid container spacing={2}>
							<Input
								autoComplete="fname"
								name="firstName"
								id="firstName"
								label="First Name"
								autoFocus
								sm={6}
								handleChange={handleFormChange}
							/>
							<Input
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
								sm={6}
								handleChange={handleFormChange}
							/>
							<Input
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								handleChange={handleFormChange}
							/>
							<Input
								name="password"
								type="password"
								id="password"
								label="Password"
								handleChange={handleFormChange}
							/>
							<Input
								name="confirmPassword"
								label="Confirm password"
								type="password"
								id="confirm-password"
								handleChange={handleFormChange}
							/>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox value="allowExtraEmails" color="primary" />
									}
									label="By checking this box I agree to Write-it Terms of use of privacy policy"
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}>
							Sign Up
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link to="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
