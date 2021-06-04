import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../../Actions/authActions";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../Components/SVGs/Logo";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core/";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import img from "./../../static/undraw_secure_login_pdn4.png";
import useStyles from "./styles";

export default function SignInSide() {
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const classes = useStyles();
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const handleFormValues = (e) => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		setFormValues({ ...formValues, [name]: value });
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formValues, history));
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />

			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Logo className={classes.logo} />
					<div className={classes.form_container}>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form
							className={classes.form}
							noValidate
							onSubmit={handleFormSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								onChange={handleFormValues}
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>

							<TextField
								variant="outlined"
								margin="normal"
								onChange={handleFormValues}
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link to="/signup" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}
